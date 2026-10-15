/* book.js - Book Now form: menu-driven item picker + WhatsApp order request (no backend, no data sent anywhere else) */
(function () {
    'use strict';

    var WHATSAPP_NUMBER = '919526668656'; // 9526668656 with India country code 91
    var MAX_QTY = 20;
    var MAX_DAYS_AHEAD = 90;

    var form = document.getElementById('bookForm');
    var menu = window.FruzoMenu;
    if (!form || !menu) { return; }

    var nameInput = document.getElementById('book-name');
    var phoneInput = document.getElementById('book-phone');
    var itemSelect = document.getElementById('book-item-select');
    var selectedList = document.getElementById('book-selected');
    var timeInput = document.getElementById('book-time');
    var daySelect = document.getElementById('book-day');
    var monthSelect = document.getElementById('book-month');
    var yearSelect = document.getElementById('book-year');
    var statusBox = document.getElementById('book-status');
    var branchWrap = document.getElementById('book-branch-options');
    var menuBranchButtons = document.querySelectorAll('.branch-btn');

    var branch = menu.getBranch();
    var selected = []; // [{ id, qty }] for the current branch, in the order added

    // ---------- helpers ----------
    function pad(n) { return n < 10 ? '0' + n : String(n); }
    // Date is picked as Day / Month / Year (fixed order, independent of browser locale)
    var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    function buildDateSelects() {
        var i, thisYear = new Date().getFullYear();
        for (i = 1; i <= 31; i++) { daySelect.appendChild(new Option(String(i), String(i))); }
        for (i = 0; i < 12; i++) { monthSelect.appendChild(new Option(MONTHS[i], String(i + 1))); }
        for (i = thisYear; i <= thisYear + 1; i++) { yearSelect.appendChild(new Option(String(i), String(i))); }
    }
    // Returns a Date from the four controls, or null (and a reason) when incomplete/invalid
    function readDateTime() {
        var d = parseInt(daySelect.value, 10), m = parseInt(monthSelect.value, 10), y = parseInt(yearSelect.value, 10);
        var t = /^(\d{1,2}):(\d{2})$/.exec(timeInput.value);
        if (!d || !m || !y || !t) { return { error: 'Please choose the day, month, year and time.' }; }
        var date = new Date(y, m - 1, d, parseInt(t[1], 10), parseInt(t[2], 10), 0, 0);
        if (date.getFullYear() !== y || date.getMonth() !== m - 1 || date.getDate() !== d) { return { error: 'That date does not exist. Please check the day and month.' }; }
        return { date: date };
    }
    function plainCategory(category) {
        // Strip the leading emoji used in menu category labels
        return String(menu.getCategoryName(category, branch)).replace(/^[^\p{L}\p{N}]+/u, '').trim();
    }
    function formatPrice(item) {
        var cur = menu.getCurrency(branch);
        return cur + ' ' + (branch === 'sharjah' ? Number(item.price).toFixed(2) : item.price);
    }
    function itemById(id) {
        var items = menu.getItems(branch);
        for (var i = 0; i < items.length; i++) { if (items[i].id === id) { return items[i]; } }
        return null;
    }
    function el(tag, cls, text) {
        var n = document.createElement(tag);
        if (cls) { n.className = cls; }
        if (text !== undefined) { n.textContent = text; }
        return n;
    }

    // ---------- branch selector (generated from the menu's own branch buttons) ----------
    function buildBranchOptions() {
        branchWrap.textContent = '';
        menuBranchButtons.forEach(function (btn) {
            var value = btn.getAttribute('data-branch');
            var labelText = (btn.querySelector('.branch-name') || btn).textContent.trim();
            var label = el('label', 'book-branch__option');
            var radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'book-branch';
            radio.value = value;
            radio.checked = value === branch;
            radio.addEventListener('change', function () {
                if (radio.checked) { menu.setBranch(value); }
            });
            label.appendChild(radio);
            label.appendChild(el('span', '', labelText));
            branchWrap.appendChild(label);
        });
    }
    function currentBranchLabel() {
        var r = branchWrap.querySelector('input:checked');
        return r ? r.parentNode.textContent.trim() : branch;
    }

    // ---------- item dropdown + selected list ----------
    function buildItemSelect() {
        itemSelect.textContent = '';
        itemSelect.appendChild(new Option('Choose an item to add...', ''));
        var groups = {}, order = [];
        menu.getItems(branch).forEach(function (item) {
            if (!groups[item.category]) {
                var g = document.createElement('optgroup');
                g.label = menu.getCategoryName(item.category, branch);
                groups[item.category] = g;
                order.push(item.category);
            }
            groups[item.category].appendChild(new Option(item.name + ' \u2014 ' + formatPrice(item), String(item.id)));
        });
        order.forEach(function (c) { itemSelect.appendChild(groups[c]); });
        itemSelect.value = '';
    }

    function renderSelected() {
        selectedList.textContent = '';
        selected.forEach(function (entry) {
            var item = itemById(entry.id);
            if (!item) { return; }
            var li = el('li', 'book-selected__row');
            var info = el('div', 'book-selected__info');
            info.appendChild(el('span', 'book-selected__name', item.name));
            info.appendChild(el('span', 'book-selected__meta', plainCategory(item.category) + ' \u00B7 ' + formatPrice(item)));
            li.appendChild(info);

            var qty = el('div', 'book-qty');
            var minus = el('button', 'book-qty__btn', '\u2212');
            minus.type = 'button';
            minus.setAttribute('data-action', 'dec');
            minus.setAttribute('data-id', item.id);
            minus.setAttribute('aria-label', 'Decrease quantity of ' + item.name);
            minus.disabled = entry.qty <= 1;
            var count = el('span', 'book-qty__count', String(entry.qty));
            count.setAttribute('aria-label', 'Quantity ' + entry.qty);
            var plus = el('button', 'book-qty__btn', '+');
            plus.type = 'button';
            plus.setAttribute('data-action', 'inc');
            plus.setAttribute('data-id', item.id);
            plus.setAttribute('aria-label', 'Increase quantity of ' + item.name);
            plus.disabled = entry.qty >= MAX_QTY;
            qty.appendChild(minus); qty.appendChild(count); qty.appendChild(plus);
            li.appendChild(qty);

            var remove = el('button', 'book-remove', '\u00D7');
            remove.type = 'button';
            remove.setAttribute('data-action', 'remove');
            remove.setAttribute('data-id', item.id);
            remove.setAttribute('aria-label', 'Remove ' + item.name);
            li.appendChild(remove);
            selectedList.appendChild(li);
        });
    }

    function findEntry(id) {
        for (var i = 0; i < selected.length; i++) { if (selected[i].id === id) { return i; } }
        return -1;
    }

    itemSelect.addEventListener('change', function () {
        var id = parseInt(itemSelect.value, 10);
        if (!isNaN(id) && itemById(id)) {
            var idx = findEntry(id);
            if (idx === -1) { selected.push({ id: id, qty: 1 }); }
            else if (selected[idx].qty < MAX_QTY) { selected[idx].qty++; }
            setError('items', '');
            renderSelected();
        }
        itemSelect.value = '';
    });

    selectedList.addEventListener('click', function (e) {
        var btn = e.target.closest ? e.target.closest('button[data-action]') : null;
        if (!btn) { return; }
        var id = parseInt(btn.getAttribute('data-id'), 10);
        var idx = findEntry(id);
        if (idx === -1) { return; }
        var action = btn.getAttribute('data-action');
        if (action === 'inc' && selected[idx].qty < MAX_QTY) { selected[idx].qty++; }
        if (action === 'dec' && selected[idx].qty > 1) { selected[idx].qty--; }
        if (action === 'remove') { selected.splice(idx, 1); }
        renderSelected();
        if (action === 'remove') { itemSelect.focus(); }
    });

    // Keep in sync with the menu: when the menu branch changes, rebuild options (items differ per branch)
    document.addEventListener('menu:branchchange', function (e) {
        var next = e.detail && e.detail.branch;
        if (!next || next === branch) { return; }
        var hadItems = selected.length > 0;
        branch = next;
        selected = [];
        buildBranchOptions();
        buildItemSelect();
        renderSelected();
        statusBox.textContent = hadItems ? 'Branch changed, so your item list was cleared. Please choose items from this branch\u2019s menu.' : '';
        statusBox.className = 'book-status' + (hadItems ? ' is-info' : '');
    });

    // ---------- validation ----------
    var fieldMap = {
        name: { input: nameInput, error: document.getElementById('book-name-error') },
        phone: { input: phoneInput, error: document.getElementById('book-phone-error') },
        items: { input: itemSelect, error: document.getElementById('book-items-error') },
        time: { input: daySelect, inputs: [daySelect, monthSelect, yearSelect, timeInput], error: document.getElementById('book-time-error') }
    };

    function setError(field, msg) {
        var f = fieldMap[field];
        f.error.textContent = msg;
        (f.inputs || [f.input]).forEach(function (inp) {
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

    function validateItems() {
        return selected.length ? '' : 'Please add at least one item.';
    }

    function validateTime() {
        var r = readDateTime();
        if (r.error) { return r.error; }
        var now = new Date();
        if (r.date.getTime() <= now.getTime()) { return 'Please choose a time in the future.'; }
        if (r.date.getTime() > now.getTime() + MAX_DAYS_AHEAD * 86400000) { return 'Please choose a time within the next ' + MAX_DAYS_AHEAD + ' days.'; }
        return '';
    }

    var validators = { name: validateName, phone: validatePhone, items: validateItems, time: validateTime };

    Object.keys(fieldMap).forEach(function (field) {
        if (field === 'items') { return; }
        var inputs = fieldMap[field].inputs || [fieldMap[field].input];
        inputs.forEach(function (input) {
            if (field !== 'time') {
                input.addEventListener('blur', function () { if (input.value) { setError(field, validators[field]()); } });
            }
            var evt = field === 'time' ? 'change' : 'input';
            input.addEventListener(evt, function () { if (input.getAttribute('aria-invalid')) { setError(field, validators[field]()); } });
        });
    });

    // ---------- WhatsApp message ----------
    function formatTime() {
        var d = readDateTime().date;
        var h = d.getHours(), ampm = h >= 12 ? 'PM' : 'AM';
        return pad(d.getDate()) + '-' + pad(d.getMonth() + 1) + '-' + d.getFullYear() + ', ' + (h % 12 || 12) + ':' + pad(d.getMinutes()) + ' ' + ampm;
    }

    function buildMessage() {
        var lines = [
            'Hello! I would like to place an order with your cafe.',
            'Name: ' + cleanName(nameInput.value),
            'Phone: ' + phoneInput.value.trim(),
            'Branch: ' + currentBranchLabel(),
            'Items Needed:'
        ];
        selected.forEach(function (entry) {
            var item = itemById(entry.id);
            if (item) { lines.push('- ' + item.name + ' (' + plainCategory(item.category) + ') x ' + entry.qty); }
        });
        lines.push('');
        lines.push('Preferred Time: ' + formatTime() + ' (DD-MM-YYYY)');
        lines.push('Call now for confirming the order.');
        lines.push('Please confirm the availability and order details. Thank you!');
        return lines.join('\n');
    }

    function buildUrl() {
        return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(buildMessage());
    }

    function showStatus(url) {
        statusBox.textContent = '';
        statusBox.className = 'book-status is-success';
        statusBox.appendChild(el('strong', '', 'Almost done! '));
        statusBox.appendChild(document.createTextNode('WhatsApp should open with your request already written. Press Send there, then wait for our reply. Your order is not confirmed until we confirm it. Didn\u2019t open? '));
        var a = el('a', 'book-status__link', 'Open WhatsApp');
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        statusBox.appendChild(a);
        statusBox.appendChild(document.createTextNode('. Your details are still filled in above.'));
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var firstInvalid = null;
        ['name', 'phone', 'items', 'time'].forEach(function (field) {
            var msg = validators[field]();
            setError(field, msg);
            if (msg && !firstInvalid) { firstInvalid = fieldMap[field].input; }
        });
        if (firstInvalid) {
            statusBox.textContent = '';
            statusBox.className = 'book-status';
            firstInvalid.focus();
            return;
        }
        var url = buildUrl();
        // Programmatic anchor click keeps this inside the user's submit gesture, so popup blockers allow it.
        var link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showStatus(url);
    });

    // ---------- init ----------
    buildBranchOptions();
    buildItemSelect();
    buildDateSelects();
    renderSelected();
})();
