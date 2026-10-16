// script.js - Fruzo Cafe menu (Kerala branch). Single source of truth for every price on the site.
// Price updates applied once, here: shawarma items +10, Chicken Loaded Fries 220, Royal Falooda 150.
const menuItems = [
    // Ice Cream Cups
    { id: 1, name: "Regular Cup (Vanilla, Strawberry)", price: 60, category: "icecream", description: "Classic ice cream cup with your choice of Vanilla or Strawberry" },
    { id: 2, name: "Premium Cup (Mango, Pineapple)", price: 80, category: "icecream", description: "Premium fruit ice cream cup with Mango or Pineapple flavor" },
    { id: 3, name: "Classic Cup (Chocolate, Butterscotch)", price: 90, category: "icecream", description: "Classic flavors: Chocolate, Butterscotch, Kulfi, Spanish Delight, or Pista" },
    { id: 4, name: "Natural Cup (Chikoo, Alphonso Mango)", price: 90, category: "icecream", description: "Natural fruit ice cream with Chikoo or Alphonso Mango" },
    { id: 5, name: "Exotic Cup (Blueberry, Tender Coconut)", price: 110, category: "icecream", description: "Exotic flavors: Blueberry or Tender Coconut" },

    // Great Sundae
    { id: 6, name: "Menace for Kids", price: 150, category: "sundae", description: "Fun sundae specially designed for kids" },
    { id: 7, name: "Banana Split", price: 150, category: "sundae", description: "Classic banana split with ice cream and toppings" },
    { id: 8, name: "Velvett Crunch", price: 160, category: "sundae", description: "Velvety ice cream with crunchy toppings" },
    { id: 9, name: "Singles Love", price: 190, category: "sundae", description: "Special sundae for singles with rich flavors" },
    { id: 10, name: "Bing's Lady", price: 120, category: "sundae", description: "Elegant sundae with delicate flavors" },
    { id: 11, name: "Scotch Maple", price: 140, category: "sundae", description: "Scotch flavored ice cream with maple syrup" },
    { id: 12, name: "Fruit Basket", price: 100, category: "sundae", description: "Ice cream sundae with fresh fruit basket" },
    { id: 13, name: "Natural Nest", price: 90, category: "sundae", description: "Natural ice cream in a nest presentation" },
    { id: 14, name: "Special Fruit Salad", price: 130, category: "sundae", description: "Ice cream with special fruit salad mix" },
    { id: 15, name: "Dry Fruit Salad", price: 160, category: "sundae", description: "Premium sundae with dry fruits and ice cream" },

    // Falooda
    { id: 16, name: "Regular Falooda", price: 110, category: "falooda", description: "Classic falooda with mixed ice creams, fruits, semiya, cornflakes, and sauces" },
    { id: 17, name: "Coastal Breeze", price: 140, category: "falooda", description: "Refreshing coastal-inspired falooda with tropical flavors" },
    { id: 18, name: "Rose Falooda", price: 130, category: "falooda", description: "Aromatic rose flavored falooda with rose syrup" },
    { id: 19, name: "Shalimar Falooda", price: 140, category: "falooda", description: "Special Shalimar recipe falooda with premium ingredients" },
    { id: 20, name: "Royal Falooda", price: 150, category: "falooda", description: "Fit for royalty - our premium falooda experience" },
    { id: 21, name: "Gud Bud", price: 130, category: "falooda", description: "Traditional Gud Bud falooda with jaggery flavor" },
    { id: 22, name: "Monarch Special", price: 130, category: "falooda", description: "Our signature Monarch falooda special" },
    { id: 23, name: "Fancy Falooda", price: 130, category: "falooda", description: "Beautifully presented fancy falooda" },
    { id: 24, name: "Choco Chikoo Falooda", price: 130, category: "falooda", description: "Chocolate and chickoo flavored falooda" },
    { id: 25, name: "Fruzo Special Falooda", price: 160, category: "falooda", description: "Our signature Fruzo special falooda with exclusive ingredients" },

    // Smoothies
    { id: 26, name: "Select All Mix Smoothie", price: 140, category: "smoothies", description: "Mixed fruit smoothie with all our best flavors" },
    { id: 27, name: "Second Home Smoothie", price: 140, category: "smoothies", description: "Comforting smoothie that feels like home" },
    { id: 28, name: "Mixed Fruit Punch Smoothie", price: 140, category: "smoothies", description: "Refreshing mixed fruit punch in smoothie form" },
    { id: 29, name: "Premium Shake Blend", price: 160, category: "smoothies", description: "Premium blended shake with high-quality ingredients" },
    { id: 30, name: "Chocolate Banana Smoothie", price: 140, category: "smoothies", description: "Rich chocolate with fresh banana smoothie" },
    { id: 31, name: "Kiss Feeling Made", price: 130, category: "smoothies", description: "Romantic smoothie with delightful flavors" },
    { id: 32, name: "Carnival Shake", price: 150, category: "smoothies", description: "Fun carnival-inspired shake with colorful flavors" },
    { id: 33, name: "Chocolate Vantec", price: 150, category: "smoothies", description: "Advanced chocolate technology in a smoothie" },
    { id: 34, name: "Mexican Bridge", price: 150, category: "smoothies", description: "Mexican-inspired smoothie with spicy-sweet flavors" },
    { id: 35, name: "Choco Berry Mix", price: 150, category: "smoothies", description: "Chocolate and mixed berries smoothie blend" },
    { id: 36, name: "Dark Knight", price: 160, category: "smoothies", description: "Dark chocolate smoothie for true chocolate lovers" },
    { id: 37, name: "Death by Chocolate", price: 170, category: "smoothies", description: "Ultimate chocolate indulgence smoothie" },
    { id: 38, name: "Don't Forget", price: 200, category: "smoothies", description: "Unforgettable premium smoothie experience" },

    // Fruzo Specials
    { id: 39, name: "Brownie with Ice Cream", price: 160, category: "specials", description: "Warm brownie served with vanilla ice cream" },
    { id: 40, name: "Black Spider", price: 170, category: "specials", description: "Mysterious Black Spider special dessert" },
    { id: 41, name: "Smoking Brownie", price: 240, category: "specials", description: "Dramatic smoking brownie dessert experience" },
    { id: 42, name: "French Kiss", price: 170, category: "specials", description: "Elegant French-inspired dessert special" },
    { id: 43, name: "Manila Bug", price: 150, category: "specials", description: "Tropical Manila-inspired dessert" },
    { id: 44, name: "Honey Moon", price: 170, category: "specials", description: "Romantic honey-flavored dessert" },
    { id: 45, name: "Hot Chocolate Fudge", price: 160, category: "specials", description: "Decadent hot chocolate fudge dessert" },
    { id: 46, name: "Big B", price: 200, category: "specials", description: "Our signature Big B special dessert" },
    { id: 47, name: "Fun Choc", price: 230, category: "specials", description: "Fun chocolate dessert with surprises" },
    { id: 48, name: "Blue Mix", price: 40, category: "specials", description: "Refreshing blue mixed beverage" },
    { id: 49, name: "Magic Time", price: 40, category: "specials", description: "Magical flavor combination drink" },
    { id: 50, name: "Mint Lime", price: 40, category: "specials", description: "Refreshing mint and lime cooler" },
    { id: 51, name: "Grape Lime", price: 40, category: "specials", description: "Sweet grape with tangy lime combination" },

    // Juices
    { id: 52, name: "Mango Juice", price: 60, category: "juices", description: "Fresh mango juice" },
    { id: 53, name: "Orange Juice", price: 60, category: "juices", description: "Fresh orange juice" },
    { id: 54, name: "Pineapple Juice", price: 60, category: "juices", description: "Fresh pineapple juice" },
    { id: 55, name: "Lime Juice", price: 60, category: "juices", description: "Fresh lime juice" },
    { id: 56, name: "Papaya Juice", price: 60, category: "juices", description: "Fresh papaya juice" },
    { id: 57, name: "Apple Juice", price: 70, category: "juices", description: "Fresh apple juice" },
    { id: 58, name: "Date Juice", price: 70, category: "juices", description: "Healthy date juice" },
    { id: 59, name: "Watermelon Juice", price: 40, category: "juices", description: "Fresh watermelon juice" },
    { id: 60, name: "Grape Juice", price: 90, category: "juices", description: "Premium grape juice" },
    { id: 61, name: "Passion Fruit Juice", price: 90, category: "juices", description: "Exotic passion fruit juice" },
    { id: 62, name: "Wicked Blue", price: 90, category: "juices", description: "Special blue flavored juice" },
    { id: 63, name: "Strawberry Juice", price: 80, category: "juices", description: "Fresh strawberry juice" },
    { id: 64, name: "Pomegranate Juice", price: 80, category: "juices", description: "Fresh pomegranate juice" },

    // Ice Cream Shakes
    { id: 65, name: "Fairy Angel (Vanilla)", price: 100, category: "iceshakes", description: "Vanilla ice cream shake" },
    { id: 66, name: "Pink & Pink (Strawberry)", price: 100, category: "iceshakes", description: "Strawberry ice cream shake" },
    { id: 67, name: "Pistachio Shake", price: 110, category: "iceshakes", description: "Pistachio flavored ice cream shake" },
    { id: 68, name: "Langra Mango Shake", price: 100, category: "iceshakes", description: "Langra mango ice cream shake" },
    { id: 69, name: "Choco Lover", price: 110, category: "iceshakes", description: "Chocolate ice cream shake for chocolate lovers" },
    { id: 70, name: "Caramello", price: 110, category: "iceshakes", description: "Caramel flavored ice cream shake" },
    { id: 71, name: "Happiness (Spanish Delight)", price: 110, category: "iceshakes", description: "Spanish delight flavored ice cream shake" },
    { id: 72, name: "Frozen Dairy (Kulfi)", price: 110, category: "iceshakes", description: "Traditional kulfi flavored shake" },
    { id: 73, name: "Chikoo Girl", price: 110, category: "iceshakes", description: "Chikoo flavored ice cream shake" },
    { id: 74, name: "Honey Drops (Fig & Honey)", price: 110, category: "iceshakes", description: "Fig and honey flavored ice cream shake" },
    { id: 75, name: "La Pina (Pineapple)", price: 110, category: "iceshakes", description: "Pineapple flavored ice cream shake" },
    { id: 76, name: "Lanmei (Blueberry)", price: 110, category: "iceshakes", description: "Blueberry flavored ice cream shake" },
    { id: 77, name: "Coco Joven (Tender Coconut)", price: 110, category: "iceshakes", description: "Tender coconut flavored ice cream shake" },

    // Milkshakes / Special Drinks
    { id: 78, name: "Sharjah Shake", price: 60, category: "milkshakes", description: "Special Sharjah recipe milkshake" },
    { id: 79, name: "Oreo Shake", price: 60, category: "milkshakes", description: "Classic Oreo cookie milkshake" },
    { id: 80, name: "Jack Fruit Shake", price: 80, category: "milkshakes", description: "Tropical jackfruit milkshake" },
    { id: 81, name: "Mango Shake", price: 80, category: "milkshakes", description: "Fresh mango milkshake" },
    { id: 82, name: "Butter Fruit Shake", price: 90, category: "milkshakes", description: "Butter fruit (avocado) milkshake" },
    { id: 83, name: "Natural (Badam) Shake", price: 100, category: "milkshakes", description: "Almond flavored milkshake" },
    { id: 84, name: "Cashew Shake", price: 100, category: "milkshakes", description: "Rich cashew milkshake" },
    { id: 85, name: "Fig & Honey Shake", price: 100, category: "milkshakes", description: "Fig and honey milkshake" },
    { id: 86, name: "Mocktail", price: 110, category: "milkshakes", description: "Refreshing mocktail drink" },
    { id: 87, name: "Dry Fruit Shake", price: 120, category: "milkshakes", description: "Premium dry fruit milkshake" },
    { id: 88, name: "Papaya Shake", price: 80, category: "milkshakes", description: "Fresh papaya milkshake" },
    { id: 89, name: "Pineapple Shake", price: 90, category: "milkshakes", description: "Fresh pineapple milkshake" },
    { id: 90, name: "Watermelon Shake", price: 80, category: "milkshakes", description: "Refreshing watermelon milkshake" },

    // Snacks
    { id: 91, name: "French Fries", price: 100, category: "snacks", description: "Crispy golden french fries" },
    { id: 92, name: "Peri Peri Fries", price: 120, category: "snacks", description: "Spicy peri peri flavored fries" },
    { id: 93, name: "Chicken Popcorn", price: 120, category: "snacks", description: "Crispy chicken popcorn bites" },
    { id: 94, name: "Chicken Nuggets", price: 120, category: "snacks", description: "Golden fried chicken nuggets" },
    { id: 95, name: "Cheese Sticks", price: 140, category: "snacks", description: "Mozzarella cheese sticks" },
    { id: 96, name: "Chicken Strips", price: 160, category: "snacks", description: "Juicy chicken strips" },
    { id: 97, name: "Chicken Loaded Fries", price: 220, category: "snacks", description: "Fries loaded with chicken and toppings" },
    { id: 98, name: "Veg Sandwich", price: 100, category: "snacks", description: "Fresh vegetable sandwich" },
    { id: 99, name: "Chicken Sandwich", price: 120, category: "snacks", description: "Grilled chicken sandwich" },
    { id: 100, name: "Truffle Sandwich", price: 140, category: "snacks", description: "Premium truffle flavored sandwich" },
    { id: 101, name: "Grill Sandwich", price: 130, category: "snacks", description: "Grilled vegetable and cheese sandwich" },

    // Burgers
    { id: 102, name: "Veg Burger", price: 100, category: "burgers", description: "Classic vegetable burger" },
    { id: 103, name: "Classic Burger", price: 120, category: "burgers", description: "Classic beef/chicken burger" },
    { id: 104, name: "Veg Mix Burger", price: 140, category: "burgers", description: "Mixed vegetable burger with special sauce" },
    { id: 105, name: "Plain Chicken Burger", price: 140, category: "burgers", description: "Simple chicken burger" },
    { id: 106, name: "Beef Burger", price: 140, category: "burgers", description: "Juicy beef burger" },
    { id: 107, name: "Zinger Burger", price: 180, category: "burgers", description: "Spicy zinger chicken burger" },
    { id: 108, name: "Chicken Double Decker", price: 190, category: "burgers", description: "Double layered chicken burger" },

    // Shawarma (each price = previous price + 10)
    { id: 109, name: "Charcoal Shawarma Roll", price: 100, category: "shawarma", description: "Charcoal grilled shawarma roll" },
    { id: 110, name: "Charcoal Shawarma Plate", price: 120, category: "shawarma", description: "Charcoal grilled shawarma platter" },
    { id: 111, name: "Shawarma Meat Roll", price: 120, category: "shawarma", description: "Meat filled shawarma roll" },
    { id: 112, name: "Shawarma Meat Plate", price: 150, category: "shawarma", description: "Meat shawarma platter" },
    { id: 113, name: "Quarter Shawarma", price: 130, category: "shawarma", description: "Quarter portion shawarma" },
    { id: 114, name: "Half Shawarma", price: 250, category: "shawarma", description: "Half portion shawarma" },
    { id: 115, name: "Full Shawarma", price: 490, category: "shawarma", description: "Full portion shawarma" },
    { id: 116, name: "Special Roll", price: 150, category: "shawarma", description: "Special shawarma roll with extra fillings" },
    { id: 117, name: "Special Half", price: 290, category: "shawarma", description: "Special half portion shawarma" },
    { id: 118, name: "Special Full", price: 530, category: "shawarma", description: "Special full portion shawarma" }
];

const CATEGORY_NAMES = {
    icecream: 'Ice Cream Cups',
    sundae: 'Great Sundae',
    falooda: 'Falooda',
    smoothies: 'Smoothies',
    specials: 'Fruzo Specials',
    juices: 'Juices',
    iceshakes: 'Ice Cream Shakes',
    milkshakes: 'Milkshakes',
    snacks: 'Snacks',
    burgers: 'Burgers',
    shawarma: 'Shawarma'
};
const CATEGORY_ORDER = Object.keys(CATEGORY_NAMES);

const MENU_PREVIEW_LIMIT = 8;
let showAllItems = false;
let activeFilter = 'all';
let searchTerm = '';

const priceFormatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
function formatINR(amount) { return priceFormatter.format(amount); }

// DOM
const menuItemsContainer = document.getElementById('menu-items');
const filterButtonsContainer = document.getElementById('filter-buttons');
const categorySelect = document.getElementById('category-select');
const sortSelect = document.getElementById('sort');
const searchInput = document.getElementById('menu-search');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const menuToggleBtn = document.getElementById('toggle-menu-btn');

function getCategoryName(category) { return CATEGORY_NAMES[category] || category; }

function getCategories() {
    const present = new Set(menuItems.map(i => i.category));
    return CATEGORY_ORDER.filter(c => present.has(c));
}

function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

// Category controls: pill buttons (desktop) + dropdown (mobile), always in sync
function createFilterControls() {
    const cats = getCategories();
    filterButtonsContainer.innerHTML =
        '<button type="button" class="filter-btn active" data-filter="all" aria-pressed="true">All Items</button>' +
        cats.map(c => `<button type="button" class="filter-btn" data-filter="${c}" aria-pressed="false">${getCategoryName(c)}</button>`).join('');
    categorySelect.innerHTML =
        '<option value="all">All Items</option>' +
        cats.map(c => `<option value="${c}">${getCategoryName(c)}</option>`).join('');
}

function setFilter(category) {
    activeFilter = category;
    showAllItems = false;
    filterButtonsContainer.querySelectorAll('.filter-btn').forEach(btn => {
        const on = btn.dataset.filter === category;
        btn.classList.toggle('active', on);
        btn.setAttribute('aria-pressed', String(on));
    });
    categorySelect.value = category;
    render();
}

function getVisibleItems() {
    let items = activeFilter === 'all' ? menuItems : menuItems.filter(i => i.category === activeFilter);
    const q = searchTerm.trim().toLowerCase();
    if (q) { items = items.filter(i => (i.name + ' ' + i.description).toLowerCase().includes(q)); }
    items = [...items];
    switch (sortSelect.value) {
        case 'price-low': return items.sort((a, b) => a.price - b.price);
        case 'price-high': return items.sort((a, b) => b.price - a.price);
        case 'name': return items.sort((a, b) => a.name.localeCompare(b.name));
        default: return items; // menu order
    }
}

function render() {
    const items = getVisibleItems();
    menuItemsContainer.innerHTML = '';
    if (items.length === 0) {
        menuItemsContainer.innerHTML = '<p class="no-items">No items found. Try another category or search.</p>';
        menuToggleBtn.style.display = 'none';
        return;
    }
    const shown = showAllItems ? items : items.slice(0, MENU_PREVIEW_LIMIT);
    const frag = document.createDocumentFragment();
    shown.forEach(item => {
        const card = document.createElement('article');
        card.className = 'menu-item';
        card.innerHTML = `
            <div class="menu-item-top">
                <span class="menu-item-category">${getCategoryName(item.category)}</span>
                <div class="menu-item-price">${formatINR(item.price)}</div>
            </div>
            <h3 class="menu-item-name">${escapeHTML(item.name)}</h3>
            <p class="menu-item-description">${escapeHTML(item.description)}</p>
            <button type="button" class="menu-add-btn" data-add="${item.id}" aria-label="Add ${escapeHTML(item.name)} to your order">+ Add to order</button>
        `;
        frag.appendChild(card);
    });
    menuItemsContainer.appendChild(frag);

    if (items.length > MENU_PREVIEW_LIMIT) {
        menuToggleBtn.style.display = 'inline-flex';
        menuToggleBtn.textContent = showAllItems ? 'Show less' : `View all ${items.length} items`;
    } else {
        menuToggleBtn.style.display = 'none';
    }
}

// Events
filterButtonsContainer.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (btn) { setFilter(btn.dataset.filter); }
});
categorySelect.addEventListener('change', () => setFilter(categorySelect.value));
sortSelect.addEventListener('change', () => { showAllItems = false; render(); });
searchInput.addEventListener('input', () => { searchTerm = searchInput.value; showAllItems = false; render(); });
menuToggleBtn.addEventListener('click', () => { showAllItems = !showAllItems; render(); });

menuItemsContainer.addEventListener('click', e => {
    const btn = e.target.closest('[data-add]');
    if (!btn || !window.FruzoOrder) { return; }
    window.FruzoOrder.add(parseInt(btn.dataset.add, 10));
    btn.classList.add('is-added');
    btn.textContent = '\u2713 Added';
    window.setTimeout(() => { btn.classList.remove('is-added'); btn.textContent = '+ Add to order'; }, 1200);
});

// Read-only access for book.js
window.FruzoMenu = {
    getItems: () => menuItems,
    getItem: id => menuItems.find(i => i.id === id) || null,
    getCategoryName: getCategoryName,
    formatINR: formatINR
};

// Mobile nav
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    const open = navMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Init
createFilterControls();
render();

(function navSetup() {
    const navbar = document.querySelector('.navbar');
    const syncNavHeight = () => document.documentElement.style.setProperty('--nav-h', navbar.offsetHeight + 'px');
    const onNavScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onNavScroll, { passive: true });
    onNavScroll();
    syncNavHeight();
    if (window.ResizeObserver) { new ResizeObserver(syncNavHeight).observe(navbar); }
    else { window.addEventListener('resize', syncNavHeight); }

    // Highlight the nav link of the section in view
    const links = [...document.querySelectorAll('.nav-menu .nav-link')];
    const map = new Map(links.map(l => [l.getAttribute('href').slice(1), l]));
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(entries => {
            entries.forEach(en => {
                if (en.isIntersecting) {
                    links.forEach(l => l.classList.remove('is-active'));
                    const l = map.get(en.target.id);
                    if (l) { l.classList.add('is-active'); }
                }
            });
        }, { rootMargin: '-40% 0px -55% 0px' });
        map.forEach((_, id) => { const s = document.getElementById(id); if (s) { io.observe(s); } });
    }
})();
