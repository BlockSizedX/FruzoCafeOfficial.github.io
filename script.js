// script.js
// Menu Data
const menuItems = [
    // Fresh Juice
    { id: 1, name: "Apple", price: 9.00, category: "juice", description: "Freshly squeezed apple juice" },
    { id: 2, name: "Orange", price: 10.00, category: "juice", description: "Freshly squeezed orange juice" },
    { id: 3, name: "Tender Coconut", price: 9.00, category: "juice", description: "Refreshing tender coconut water" },
    { id: 4, name: "Water Melon", price: 9.00, category: "juice", description: "Sweet and hydrating watermelon juice" },
    { id: 5, name: "Pineapple", price: 9.00, category: "juice", description: "Tropical pineapple juice" },
    { id: 6, name: "Grape", price: 9.00, category: "juice", description: "Sweet grape juice" },
    { id: 7, name: "Anar", price: 9.00, category: "juice", description: "Fresh pomegranate juice" },
    { id: 8, name: "Papaya", price: 9.00, category: "juice", description: "Nutritious papaya juice" },
    { id: 9, name: "Sweet Melon", price: 9.00, category: "juice", description: "Refreshing sweet melon juice" },
    { id: 10, name: "Lime", price: 5.00, category: "juice", description: "Zesty lime juice" },
    { id: 11, name: "Mint Lime", price: 6.00, category: "juice", description: "Refreshing mint and lime combination" },
    { id: 12, name: "Majic Lime", price: 6.00, category: "juice", description: "Our special magic lime recipe" },
    { id: 13, name: "Ginger Lime", price: 6.00, category: "juice", description: "Spicy ginger with zesty lime" },
    { id: 14, name: "Grape Lime", price: 6.00, category: "juice", description: "Sweet grape with tangy lime" },

    // Mojito
    { id: 15, name: "Blue Curacao", price: 11.00, category: "mojito", description: "Refreshing blue curacao mojito" },
    { id: 16, name: "Green Apple", price: 11.00, category: "mojito", description: "Crisp green apple mojito" },
    { id: 17, name: "Water Melon", price: 11.00, category: "mojito", description: "Sweet watermelon mojito" },
    { id: 18, name: "Passion Fruit", price: 11.00, category: "mojito", description: "Tropical passion fruit mojito" },
    { id: 19, name: "Strawberry", price: 11.00, category: "mojito", description: "Sweet strawberry mojito" },

    // Milkshake
    { id: 20, name: "Apple Shake", price: 10.00, category: "milkshake", description: "Creamy apple milkshake" },
    { id: 21, name: "Anar Shake", price: 10.00, category: "milkshake", description: "Creamy pomegranate milkshake" },
    { id: 22, name: "Papaya Shake", price: 10.00, category: "milkshake", description: "Creamy papaya milkshake" },
    { id: 23, name: "Chickoo Shake", price: 10.00, category: "milkshake", description: "Creamy chickoo milkshake" },
    { id: 24, name: "Avocado Shake", price: 10.00, category: "milkshake", description: "Creamy avocado milkshake" },
    { id: 25, name: "Sharjah Shake", price: 10.00, category: "milkshake", description: "Special Sharjah recipe milkshake" },
    { id: 26, name: "Mango Shake", price: 10.00, category: "milkshake", description: "Creamy mango milkshake" },
    { id: 27, name: "Abood", price: 10.00, category: "milkshake", description: "Special Abood recipe milkshake" },
    { id: 28, name: "Date Shake", price: 10.00, category: "milkshake", description: "Nutritious date milkshake" },
    { id: 29, name: "Strawberry Shake", price: 10.00, category: "milkshake", description: "Creamy strawberry milkshake" },
    { id: 30, name: "Oreo Milkshake", price: 10.00, category: "milkshake", description: "Classic Oreo cookie milkshake" },
    { id: 31, name: "KitKat Milkshake", price: 10.00, category: "milkshake", description: "Chocolatey KitKat milkshake" },
    { id: 32, name: "Snickers Milkshake", price: 10.00, category: "milkshake", description: "Nutty Snickers milkshake" },
    { id: 33, name: "Tender Coconut Shake", price: 11.00, category: "milkshake", description: "Refreshing tender coconut milkshake" },
    { id: 34, name: "Cocktail", price: 11.00, category: "milkshake", description: "Fruit cocktail milkshake" },
    { id: 35, name: "Fig Shake", price: 11.00, category: "milkshake", description: "Nutritious fig milkshake" },
    { id: 36, name: "Elaneer Kandi Shake", price: 12.00, category: "milkshake", description: "Special tender coconut milkshake" },
    { id: 37, name: "Cashew Shake", price: 12.00, category: "milkshake", description: "Rich cashew milkshake" },
    { id: 38, name: "Badam Shake", price: 12.00, category: "milkshake", description: "Nutritious almond milkshake" },
    { id: 39, name: "Jack Fruit Shake", price: 12.00, category: "milkshake", description: "Tropical jackfruit milkshake" },
    { id: 40, name: "Mocktail", price: 12.00, category: "milkshake", description: "Refreshing mocktail milkshake" },
    { id: 41, name: "Cold Coffee", price: 12.00, category: "milkshake", description: "Chilled coffee milkshake" },

    // Falooda
    { id: 42, name: "Regular Falooda", price: 11.00, category: "falooda", description: "Classic falooda with vermicelli and ice cream" },
    { id: 43, name: "Falooda Capital", price: 12.00, category: "falooda", description: "Premium falooda with special ingredients" },
    { id: 44, name: "Falooda Bay", price: 14.00, category: "falooda", description: "Deluxe falooda with exotic flavors" },
    { id: 45, name: "Shalimar Falooda", price: 14.00, category: "falooda", description: "Special Shalimar recipe falooda" },
    { id: 46, name: "Costal Breeze", price: 14.00, category: "falooda", description: "Refreshing coastal-inspired falooda" },
    { id: 47, name: "Monarch Special", price: 13.00, category: "falooda", description: "Our signature Monarch falooda" },
    { id: 48, name: "Choco Chickoo Falooda", price: 13.00, category: "falooda", description: "Chocolate and chickoo falooda" },
    { id: 49, name: "Fancy Falooda", price: 13.00, category: "falooda", description: "Beautifully presented fancy falooda" },
    { id: 50, name: "Gud Bud", price: 13.00, category: "falooda", description: "Traditional Gud Bud falooda" },
    { id: 51, name: "Malabar Falooda", price: 13.00, category: "falooda", description: "Malabar-style special falooda" },
    { id: 52, name: "Royal Kingdom Falooda", price: 15.00, category: "falooda", description: "Fit for royalty - our premium falooda" },
    { id: 53, name: "Fruzo Special Falooda", price: 16.00, category: "falooda", description: "Our signature Fruzo special falooda" },

    // Fruzo Special
    { id: 54, name: "Kannur SP Grape Soda", price: 7.00, category: "special", description: "Special grape soda from Kannur" },
    { id: 55, name: "Second Home", price: 13.00, category: "special", description: "Comforting Second Home special" },
    { id: 56, name: "Smoking Brownie", price: 13.00, category: "special", description: "Dramatic smoking brownie dessert" },
    { id: 57, name: "Puttu Ice Cream", price: 13.00, category: "special", description: "Traditional puttu with ice cream" },
    { id: 58, name: "Hot Chocolate Fudge", price: 13.00, category: "special", description: "Decadent hot chocolate fudge" },
    { id: 59, name: "Black Spider", price: 13.00, category: "special", description: "Mysterious Black Spider special" },
    { id: 60, name: "Brown Spider", price: 13.00, category: "special", description: "Chocolatey Brown Spider special" },
    { id: 61, name: "Dry Fruit Dacoria", price: 14.00, category: "special", description: "Rich dry fruit dessert" },
    { id: 62, name: "Choco Lava", price: 13.00, category: "special", description: "Molten chocolate lava cake" },
    { id: 63, name: "Blue Lady", price: 11.00, category: "special", description: "Elegant Blue Lady special" },
    { id: 64, name: "Big B", price: 13.00, category: "special", description: "Our signature Big B special" },
    { id: 65, name: "Mixed Fruit Punch", price: 13.00, category: "special", description: "Refreshing mixed fruit punch" },
    { id: 66, name: "Death by Chocolate", price: 13.00, category: "special", description: "Ultimate chocolate indulgence" },
    { id: 67, name: "Second Wife (Seasonal)", price: 13.00, category: "special", description: "Seasonal Second Wife special" },
    { id: 68, name: "Avil Milk", price: 13.00, category: "special", description: "Traditional avil milk dessert" },
    { id: 69, name: "Nannari Sarbath", price: 7.00, category: "special", description: "Refreshing nannari sarbath" },
    { id: 70, name: "Raw Mango Bird's Eye", price: 7.00, category: "special", description: "Tangy raw mango special" },
    { id: 71, name: "Water Melon Blast", price: 13.00, category: "special", description: "Explosive watermelon flavor" }
];

// DOM Elements
const menuItemsContainer = document.getElementById('menu-items');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sort');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const contactForm = document.getElementById('contactForm');

// Display Menu Items
function displayMenuItems(items) {
    menuItemsContainer.innerHTML = '';
    
    if (items.length === 0) {
        menuItemsContainer.innerHTML = '<p class="no-items">No items found in this category.</p>';
        return;
    }
    
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = `menu-item ${item.category}`;
        menuItem.innerHTML = `
            <div class="menu-item-header">
                <span class="menu-item-category">${getCategoryName(item.category)}</span>
                <h3 class="menu-item-name">${item.name}</h3>
                <div class="menu-item-price">AED. ${item.price.toFixed(2)}</div>
            </div>
            <div class="menu-item-body">
                <p class="menu-item-description">${item.description}</p>
            </div>
        `;
        menuItemsContainer.appendChild(menuItem);
    });
}

// Get Category Name for Display
function getCategoryName(category) {
    const categoryNames = {
        'juice': 'Fresh Juice',
        'mojito': 'Mojito',
        'milkshake': 'Milkshake',
        'falooda': 'Falooda',
        'special': 'Fruzo Special'
    };
    return categoryNames[category] || category;
}

// Filter Menu Items
function filterMenu(category) {
    if (category === 'all') {
        return menuItems;
    }
    return menuItems.filter(item => item.category === category);
}

// Sort Menu Items
function sortMenu(items, sortBy) {
    const sortedItems = [...items];
    
    switch(sortBy) {
        case 'name':
            return sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        case 'price-low':
            return sortedItems.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sortedItems.sort((a, b) => b.price - a.price);
        default:
            return sortedItems;
    }
}

// Initialize Menu
function initMenu() {
    let filteredItems = filterMenu('all');
    let sortedItems = sortMenu(filteredItems, 'name');
    displayMenuItems(sortedItems);
}

// Event Listeners for Filter Buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        // Filter and display items
        const category = button.getAttribute('data-filter');
        let filteredItems = filterMenu(category);
        const sortBy = sortSelect.value;
        let sortedItems = sortMenu(filteredItems, sortBy);
        displayMenuItems(sortedItems);
    });
});

// Event Listener for Sort Select
sortSelect.addEventListener('change', () => {
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    let filteredItems = filterMenu(activeFilter);
    const sortBy = sortSelect.value;
    let sortedItems = sortMenu(filteredItems, sortBy);
    displayMenuItems(sortedItems);
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    const mailto = `mailto:blocksizedx@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

window.location.href = mailto;
    contactForm.reset();
});

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });
});