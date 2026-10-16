/* book.js - Book Now: order builder, live receipt, confirmation modal, WhatsApp hand-off.
   No backend: the order is only sent when the customer presses Send inside WhatsApp. */
(function () {
    'use strict';

    var WHATSAPP_NUMBER = '919526668656'; // existing destination (9526668656 with India code 91)
    var TIMEZONE = 'Asia/Kolkata';
    var DAYS_AHEAD = 7;                   // today + 7 = 8 selectable dates
    var MAX_QTY = 20;
    var OPEN_MINUTES = 10 * 60;           // Kerala branch opening hours shown on the site: 10 AM - 11 PM
    var CLOSE_MINUTES = 23 * 60;

    var form = document.getElementById('bookForm');
    var menu = window.FruzoMenu;
    if (!form || !menu) { return; }

    var nameInput = document.getElementById('book-name');
    var phoneInput = document.getElementById('book-phone');
    var dateSelect = document.getElementById('book-date');
    var hourSelect = document.getElementById('book-hour');
    var minuteSelect = document.getElementById('book-minute');
    var ampmSelect = document.getElementById('book-ampm');
    var itemSelect = document.getElementById('book-item-select');
    var statusBox = document.getElementById('book-status');
    var receiptLines = document.getElementById('receipt-lines');
    var receiptEmpty = document.getElementById('receipt-empty');
    var receiptTotals = document.getElementById('receipt-totals');
    var receiptSubtotal = document.getElementById('receipt-subtotal');
    var receiptTotal = document.getElementById('receipt-total');

    var modal = document.getElementById('confirm-modal');
    var modalDialog = modal.querySelector('.modal__dialog');
    var modalMeta = document.getElementById('modal-meta');
    var modalLines = document.getElementById('modal-lines');
    var modalTotal = document.getElementById('modal-total');
    var modalEdit = document.getElementById('modal-edit');
    var modalContinue = document.getElementById('modal-continue');

    var selected = []; // [{ id, qty }] in the order added
    var lastFocus = null;

    // ---------- helpers ----------
    function pad(n) { return n < 10 ? '0' + n : String(n); }
    function el(tag, cls, text) {
        var n = document.createElement(tag);
        if (cls) { n.className = cls; }
        if (text !== undefined) { n.textContent = text; }
        return n;
    }
    function inr(n) { return menu.formatINR(n); }

    // ---------- Asia/Kolkata date handling (never uses the device's local date) ----------
    var istParts = new Intl.DateTimeFormat('en-GB', {
        timeZone: TIMEZONE, year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
    });
    function istNow() {
        var p = {};
        istParts.formatToParts(new Date()).forEach(function (x) { p[x.type] = x.value; });
        return {
            y: parseInt(p.year, 10), m: parseInt(p.month, 10), d: parseInt(p.day, 10),
            minutes: (parseInt(p.hour, 10) % 24) * 60 + parseInt(p.minute, 10)
        };
    }
    var weekdayFmt = new Intl.DateTimeFormat('en-IN', { timeZone: 'UTC', weekday: 'long' });
    var monthFmt = new Intl.DateTimeFormat('en-IN', { timeZone: 'UTC', month: 'long' });

    // Calendar arithmetic on a UTC "date-only" value: no DST / offset drift, handles month and year rollover.
    function allowedDates() {
        var now = istNow(), list = [], i;
        for (i = 0; i <= DAYS_AHEAD; i++) {
            var u = new Date(Date.UTC(now.y, now.m - 1, now.d + i));
            var iso = u.getUTCFullYear() + '-' + pad(u.getUTCMonth() + 1) + '-' + pad(u.getUTCDate());
            var plain = weekdayFmt.format(u) + ', ' + u.getUTCDate() + ' ' + monthFmt.format(u);
            var prefix = i === 0 ? 'Today \u2014 ' : (i === 1 ? 'Tomorrow \u2014 ' : '');
            list.push({ iso: iso, label: prefix + plain, plain: plain, full: plain + ' ' + u.getUTCFullYear(), isToday: i === 0 });
        }
        return list;
    }
    function buildDateOptions() {
        var keep = dateSelect.value;
        var list = allowedDates();
        dateSelect.textContent = '';
        dateSelect.appendChild(new Option('Select a date', ''));
        list.forEach(function (d) { dateSelect.appendChild(new Option(d.label, d.iso)); });
        var stillValid = list.some(function (d) { return d.iso === keep; });
        dateSelect.value = stillValid ? keep : '';
    }
    function findAllowedDate(iso) {
        var list = allowedDates();
        for (var i = 0; i < list.length; i++) { if (list[i].iso === iso) { return list[i]; } }
        return null;
    }

    // ---------- time (12-hour clock) ----------
    function buildTimeOptions() {
        var i;
        hourSelect.appendChild(new Option('Hour', ''));
        for (i = 1; i <= 12; i++) { hourSelect.appendChild(new Option(pad(i), String(i))); }
        minuteSelect.appendChild(new Option('Min', ''));
        for (i = 0; i < 60; i++) { minuteSelect.appendChild(new Option(pad(i), String(i))); }
        ampmSelect.insertBefore(new Option('AM/PM', ''), ampmSelect.firstChild);
        ampmSelect.value = '';
    }
    function readTime() {
        if (!hourSelect.value || !minuteSelect.value || !ampmSelect.value) { return null; }
        var h = parseInt(hourSelect.value, 10), m = parseInt(minuteSelect.value, 10), pm = ampmSelect.value === 'PM';
        if (!(h >= 1 && h <= 12) || !(m >= 0 && m <= 59)) { return null; }
        return { minutes: ((h % 12) + (pm ? 12 : 0)) * 60 + m, label: pad(h) + ':' + pad(m) + ' ' + ampmSelect.value };
    }

    // ---------- order state + receipt ----------
    function findEntry(id) {
        for (var i = 0; i < selected.length; i++) { if (selected[i].id === id) { return i; } }
        return -1;
    }
    function addItem(id) {
        if (!menu.getItem(id)) { return; }
        var idx = findEntry(id);
        if (idx === -1) { selected.push({ id: id, qty: 1 }); }
        else if (selected[idx].qty < MAX_QTY) { selected[idx].qty++; }
        setError('items', '');
        renderReceipt();
    }
    function totals() {
        var sum = 0;
        selected.forEach(function (e) {
            var item = menu.getItem(e.id);
            if (item) { sum += item.price * e.qty; }
        });
        return sum;
    }
    function renderReceipt() {
        receiptLines.textContent = '';
        selected.forEach(function (entry) {
            var item = menu.getItem(entry.id);
            if (!item) { return; }
            var li = el('li', 'receipt-line');
            var info = el('div', 'receipt-line__info');
            info.appendChild(el('span', 'receipt-line__name', item.name));
            info.appendChild(el('span', 'receipt-line__meta', inr(item.price) + ' \u00D7 ' + entry.qty));
            li.appendChild(info);

            var qty = el('div', 'book-qty');
            var minus = el('button', 'book-qty__btn', '\u2212');
            minus.type = 'button'; minus.setAttribute('data-action', 'dec'); minus.setAttribute('data-id', item.id);
            minus.setAttribute('aria-label', 'Decrease quantity of ' + item.name);
            minus.disabled = entry.qty <= 1;
            var count = el('span', 'book-qty__count', String(entry.qty));
            var plus = el('button', 'book-qty__btn', '+');
            plus.type = 'button'; plus.setAttribute('data-action', 'inc'); plus.setAttribute('data-id', item.id);
            plus.setAttribute('aria-label', 'Increase quantity of ' + item.name);
            plus.disabled = entry.qty >= MAX_QTY;
            qty.appendChild(minus); qty.appendChild(count); qty.appendChild(plus);
            li.appendChild(qty);

            li.appendChild(el('span', 'receipt-line__total', inr(item.price * entry.qty)));

            var remove = el('button', 'book-remove', '\u00D7');
            remove.type = 'button'; remove.setAttribute('data-action', 'remove'); remove.setAttribute('data-id', item.id);
            remove.setAttribute('aria-label', 'Remove ' + item.name);
            li.appendChild(remove);
            receiptLines.appendChild(li);
        });
        var has = selected.length > 0;
        receiptEmpty.hidden = has;
        receiptTotals.hidden = !has;
        var sum = totals();
        receiptSubtotal.textContent = inr(sum);
        receiptTotal.textContent = inr(sum);
    }
    receiptLines.addEventListener('click', function (e) {
        var btn = e.target.closest ? e.target.closest('button[data-action]') : null;
        if (!btn) { return; }
        var id = parseInt(btn.getAttribute('data-id'), 10);
        var idx = findEntry(id);
        if (idx === -1) { return; }
        var action = btn.getAttribute('data-action');
        if (action === 'inc' && selected[idx].qty < MAX_QTY) { selected[idx].qty++; }
        if (action === 'dec' && selected[idx].qty > 1) { selected[idx].qty--; }
        if (action === 'remove') { selected.splice(idx, 1); }
        renderReceipt();
        if (action === 'remove') { itemSelect.focus(); }
    });

    function buildItemSelect() {
        var groups = {}, order = [];
        menu.getItems().forEach(function (item) {
            if (!groups[item.category]) {
                var g = document.createElement('optgroup');
                g.label = menu.getCategoryName(item.category);
                groups[item.category] = g;
                order.push(item.category);
            }
            groups[item.category].appendChild(new Option(item.name + ' \u2014 ' + inr(item.price), String(item.id)));
        });
        order.forEach(function (c) { itemSelect.appendChild(groups[c]); });
        itemSelect.value = '';
    }
    itemSelect.addEventListener('change', function () {
        var id = parseInt(itemSelect.value, 10);
        if (!isNaN(id)) { addItem(id); }
        itemSelect.value = '';
    });

    // Public hook used by the "Add to order" buttons on the menu cards
    window.FruzoOrder = { add: addItem };

    // ---------- validation ----------
    var fieldMap = {
        name: { inputs: [nameInput], error: document.getElementById('book-name-error') },
        phone: { inputs: [phoneInput], error: document.getElementById('book-phone-error') },
        date: { inputs: [dateSelect], error: document.getElementById('book-date-error') },
        time: { inputs: [hourSelect, minuteSelect, ampmSelect], error: document.getElementById('book-time-error') },
        items: { inputs: [itemSelect], error: document.getElementById('book-items-error') }
    };
    function setError(field, msg) {
        var f = fieldMap[field];
        f.error.textContent = msg;
        f.inputs.forEach(function (inp) {
            if (msg) { inp.setAttribute('aria-invalid', 'true'); } else { inp.removeAttribute('aria-invalid'); }
        });
    }
    function cleanName(v) { return v.replace(/\s+/g, ' ').trim(); }

    function validateName() {
        var v = cleanName(nameInput.value);
        if (!v) { return 'Please enter your full name.'; }
        if (v.length < 2 || !/\p{L}/u.test(v)) { return 'Please enter a valid name.'; }
        if (v.length > 80) { return 'Name is too long (80 characters max).'; }
        return '';
    }
    function validatePhone() {
        var raw = phoneInput.value.trim();
        if (!raw) { return 'Please enter your phone number.'; }
        if (!/^\+?[\d\s\-().]+$/.test(raw)) { return 'Use digits only (spaces, dashes and a leading + are fine).'; }
        var digits = raw.replace(/\D/g, '');
        var compact = raw.replace(/[\s\-().]/g, '');
        if (compact.indexOf('+91') === 0) {
            return /^91[6-9]\d{9}$/.test(digits) ? '' : 'After +91 enter a 10-digit mobile number starting with 6-9.';
        }
        if (digits.length === 10) {
            return /^[6-9]/.test(digits) ? '' : 'Indian mobile numbers are 10 digits and start with 6, 7, 8 or 9.';
        }
        if (digits.length < 7 || digits.length > 15) { return 'Please enter a valid phone number (7 to 15 digits, with country code if outside India).'; }
        return '';
    }
    function validateDate() {
        if (!dateSelect.value) { return 'Please choose a date.'; }
        if (!findAllowedDate(dateSelect.value)) {
            buildDateOptions();
            return 'That date is no longer available. Please choose a date from today to the next 7 days.';
        }
        return '';
    }
    function validateTime() {
        var t = readTime();
        if (!t) { return 'Please choose the hour, minute and AM/PM.'; }
        if (t.minutes < OPEN_MINUTES || t.minutes > CLOSE_MINUTES) { return 'We are open 10:00 AM to 11:00 PM. Please choose a time in that range.'; }
        var d = findAllowedDate(dateSelect.value);
        if (d && d.isToday && t.minutes <= istNow().minutes) { return 'That time has already passed today. Please choose a later time.'; }
        return '';
    }
    function validateItems() {
        if (!selected.length) { return 'Please add at least one item.'; }
        for (var i = 0; i < selected.length; i++) {
            var item = menu.getItem(selected[i].id), q = selected[i].qty;
            if (!item || !isFinite(item.price) || item.price <= 0 || q % 1 !== 0 || q < 1 || q > MAX_QTY) { return 'Some items are invalid. Please re-add them.'; }
        }
        return '';
    }
    var validators = { name: validateName, phone: validatePhone, date: validateDate, time: validateTime, items: validateItems };

    function validateAll() {
        var firstInvalid = null;
        ['name', 'phone', 'date', 'time', 'items'].forEach(function (field) {
            var msg = validators[field]();
            setError(field, msg);
            if (msg && !firstInvalid) { firstInvalid = fieldMap[field].inputs[0]; }
        });
        return firstInvalid;
    }
    Object.keys(fieldMap).forEach(function (field) {
        if (field === 'items') { return; }
        fieldMap[field].inputs.forEach(function (input) {
            input.addEventListener(input.tagName === 'SELECT' ? 'change' : 'input', function () {
                if (input.getAttribute('aria-invalid')) { setError(field, validators[field]()); }
                if (field === 'date' && fieldMap.time.inputs[0].getAttribute('aria-invalid')) { setError('time', validateTime()); }
            });
            if (input.tagName !== 'SELECT') {
                input.addEventListener('blur', function () { if (input.value) { setError(field, validators[field]()); } });
            }
        });
    });

    // ---------- WhatsApp message ----------
    function buildMessage() {
        var d = findAllowedDate(dateSelect.value);
        var t = readTime();
        var lines = [
            'Hello Fruzo Cafe! I would like to place an order.',
            '',
            'Name: ' + cleanName(nameInput.value),
            'Phone: ' + phoneInput.value.trim(),
            'Date: ' + d.full,
            'Time: ' + t.label,
            '',
            'Items:'
        ];
        selected.forEach(function (e, i) {
            var item = menu.getItem(e.id);
            lines.push((i + 1) + '. ' + item.name + ' x ' + e.qty + ' @ ' + inr(item.price) + ' = ' + inr(item.price * e.qty));
        });
        var sum = totals();
        lines.push('');
        lines.push('Food subtotal: ' + inr(sum));
        lines.push('Estimated total: ' + inr(sum) + ' (estimate only)');
        lines.push('');
        lines.push('Additional charges apply for containers.');
        lines.push('Delivery is available for orders above ' + inr(400) + ' within 5 km. Otherwise, on-site pickup is required.');
        lines.push('');
        lines.push('Please confirm my order. Thank you!');
        return lines.join('\n');
    }
    function buildUrl() {
        return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(buildMessage());
    }

    // ---------- modal ----------
    function focusables() {
        return Array.prototype.slice.call(modal.querySelectorAll('button:not([disabled]), [href], input, select, [tabindex]:not([tabindex="-1"])'));
    }
    function openModal() {
        var d = findAllowedDate(dateSelect.value), t = readTime();
        modalMeta.textContent = '';
        [['Name', cleanName(nameInput.value)], ['Phone', phoneInput.value.trim()], ['Date', d.plain], ['Time', t.label]].forEach(function (row) {
            var p = el('p', '');
            p.appendChild(el('span', 'modal__label', row[0]));
            p.appendChild(document.createTextNode(row[1]));
            modalMeta.appendChild(p);
        });
        modalLines.textContent = '';
        selected.forEach(function (e) {
            var item = menu.getItem(e.id);
            var li = el('li', '');
            li.appendChild(el('span', '', item.name + ' \u00D7 ' + e.qty));
            li.appendChild(el('span', '', inr(item.price * e.qty)));
            modalLines.appendChild(li);
        });
        modalTotal.textContent = inr(totals());
        lastFocus = document.activeElement;
        modal.hidden = false;
        document.body.classList.add('modal-open');
        modalDialog.focus();
    }
    function closeModal() {
        if (modal.hidden) { return; }
        modal.hidden = true;
        document.body.classList.remove('modal-open');
        if (lastFocus && lastFocus.focus) { lastFocus.focus(); }
    }
    modal.addEventListener('click', function (e) {
        if (e.target.hasAttribute && e.target.hasAttribute('data-close-modal')) { closeModal(); }
    });
    modalEdit.addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) {
        if (modal.hidden) { return; }
        if (e.key === 'Escape') { e.preventDefault(); closeModal(); return; }
        if (e.key === 'Tab') {
            var f = focusables();
            if (!f.length) { return; }
            var first = f[0], last = f[f.length - 1];
            if (e.shiftKey && (document.activeElement === first || document.activeElement === modalDialog)) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
    });

    function showStatus(url) {
        statusBox.textContent = '';
        statusBox.className = 'book-status is-info';
        statusBox.appendChild(el('strong', '', 'WhatsApp is opening. '));
        statusBox.appendChild(document.createTextNode('Your message is ready: review it and press Send there. Your order is not confirmed until we reply and confirm. Didn\u2019t open? '));
        var a = el('a', 'book-status__link', 'Open WhatsApp');
        a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
        statusBox.appendChild(a);
        statusBox.appendChild(document.createTextNode('.'));
    }

    // ---------- submit flow ----------
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        statusBox.textContent = '';
        statusBox.className = 'book-status';
        var bad = validateAll();
        if (bad) { bad.focus(); return; }
        openModal();
    });

    modalContinue.addEventListener('click', function () {
        // Re-validate right before building the message (date range may have changed, e.g. past midnight IST)
        var bad = validateAll();
        if (bad) { closeModal(); bad.focus(); return; }
        var url = buildUrl();
        // Anchor click inside the user's click gesture so popup blockers allow it
        var link = document.createElement('a');
        link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        closeModal();
        showStatus(url);
    });

    // Keep the date list correct if the page stays open across midnight (IST)
    document.addEventListener('visibilitychange', function () { if (!document.hidden) { buildDateOptions(); } });

    // ---------- init ----------
    buildDateOptions();
    buildTimeOptions();
    buildItemSelect();
    renderReceipt();
})();
