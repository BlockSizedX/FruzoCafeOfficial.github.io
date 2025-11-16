// script.js
// Menu Data - SHARJAH (DUBAI) BRANCH
// script.js
// Menu Data - SHARJAH (DUBAI) BRANCH
const sharjahMenuItems = [
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

// Menu Data - TALIPARAMBA (KERALA) BRANCH
const taliparambaMenuItems = [
    // 🍨 ICE CREAM (CUPS)
    { id: 1, name: "Regular Cup (Vanilla, Strawberry)", price: 60, category: "icecream", description: "Classic ice cream cup with your choice of Vanilla or Strawberry" },
    { id: 2, name: "Premium Cup (Mango, Pineapple)", price: 80, category: "icecream", description: "Premium fruit ice cream cup with Mango or Pineapple flavor" },
    { id: 3, name: "Classic Cup (Chocolate, Butterscotch)", price: 90, category: "icecream", description: "Classic flavors: Chocolate, Butterscotch, Kulfi, Spanish Delight, or Pista" },
    { id: 4, name: "Natural Cup (Chikoo, Alphonso Mango)", price: 90, category: "icecream", description: "Natural fruit ice cream with Chikoo or Alphonso Mango" },
    { id: 5, name: "Exotic Cup (Blueberry, Tender Coconut)", price: 110, category: "icecream", description: "Exotic flavors: Blueberry or Tender Coconut" },

    // 🍧 GREAT SUNDAE
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

    // 🍨 FALOODA
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

    // 🍓 FRUZO SMOOTHIES
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

    // 🍧 FRUZO SPECIALS
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

    // 🧃 JUICES
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

    // 🥤 ICE CREAM SHAKES
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

    // 🥤 MILKSHAKES / SPECIAL DRINKS
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

    // 🍟 SNACKS
    { id: 91, name: "French Fries", price: 100, category: "snacks", description: "Crispy golden french fries" },
    { id: 92, name: "Peri Peri Fries", price: 120, category: "snacks", description: "Spicy peri peri flavored fries" },
    { id: 93, name: "Chicken Popcorn", price: 120, category: "snacks", description: "Crispy chicken popcorn bites" },
    { id: 94, name: "Chicken Nuggets", price: 120, category: "snacks", description: "Golden fried chicken nuggets" },
    { id: 95, name: "Cheese Sticks", price: 140, category: "snacks", description: "Mozzarella cheese sticks" },
    { id: 96, name: "Chicken Strips", price: 160, category: "snacks", description: "Juicy chicken strips" },
    { id: 97, name: "Chicken Loaded Fries", price: 200, category: "snacks", description: "Fries loaded with chicken and toppings" },
    { id: 98, name: "Veg Sandwich", price: 100, category: "snacks", description: "Fresh vegetable sandwich" },
    { id: 99, name: "Chicken Sandwich", price: 120, category: "snacks", description: "Grilled chicken sandwich" },
    { id: 100, name: "Truffle Sandwich", price: 140, category: "snacks", description: "Premium truffle flavored sandwich" },
    { id: 101, name: "Grill Sandwich", price: 130, category: "snacks", description: "Grilled vegetable and cheese sandwich" },

    // 🍔 BURGERS
    { id: 102, name: "Veg Burger", price: 100, category: "burgers", description: "Classic vegetable burger" },
    { id: 103, name: "Classic Burger", price: 120, category: "burgers", description: "Classic beef/chicken burger" },
    { id: 104, name: "Veg Mix Burger", price: 140, category: "burgers", description: "Mixed vegetable burger with special sauce" },
    { id: 105, name: "Plain Chicken Burger", price: 140, category: "burgers", description: "Simple chicken burger" },
    { id: 106, name: "Beef Burger", price: 140, category: "burgers", description: "Juicy beef burger" },
    { id: 107, name: "Zinger Burger", price: 180, category: "burgers", description: "Spicy zinger chicken burger" },
    { id: 108, name: "Chicken Double Decker", price: 190, category: "burgers", description: "Double layered chicken burger" },

    // 🍗 SHAWARMA
    { id: 109, name: "Charcoal Shawarma Roll", price: 90, category: "shawarma", description: "Charcoal grilled shawarma roll" },
    { id: 110, name: "Charcoal Shawarma Plate", price: 110, category: "shawarma", description: "Charcoal grilled shawarma platter" },
    { id: 111, name: "Shawarma Meat Roll", price: 110, category: "shawarma", description: "Meat filled shawarma roll" },
    { id: 112, name: "Shawarma Meat Plate", price: 140, category: "shawarma", description: "Meat shawarma platter" },
    { id: 113, name: "Quarter Shawarma", price: 120, category: "shawarma", description: "Quarter portion shawarma" },
    { id: 114, name: "Half Shawarma", price: 240, category: "shawarma", description: "Half portion shawarma" },
    { id: 115, name: "Full Shawarma", price: 480, category: "shawarma", description: "Full portion shawarma" },
    { id: 116, name: "Special Roll", price: 140, category: "shawarma", description: "Special shawarma roll with extra fillings" },
    { id: 117, name: "Special Half", price: 280, category: "shawarma", description: "Special half portion shawarma" },
    { id: 118, name: "Special Full", price: 520, category: "shawarma", description: "Special full portion shawarma" }
];

// Current menu based on selected branch
let menuItems = sharjahMenuItems;
let currentBranch = 'sharjah';

// DOM Elements
const menuItemsContainer = document.getElementById('menu-items');
const filterButtonsContainer = document.querySelector('.filter-buttons');
const sortSelect = document.getElementById('sort');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const contactForm = document.getElementById('contactForm');
const branchButtons = document.querySelectorAll('.branch-btn');

// Get unique categories for each branch
function getBranchCategories(branch) {
    const items = branch === 'sharjah' ? sharjahMenuItems : taliparambaMenuItems;
    const categories = [...new Set(items.map(item => item.category))];
    return categories.sort();
}

// Create filter buttons based on current branch
function createFilterButtons(branch) {
    const categories = getBranchCategories(branch);
    
    let buttonsHTML = '<button class="filter-btn active" data-filter="all">All Items</button>';
    
    categories.forEach(category => {
        const categoryName = getCategoryName(category, branch);
        buttonsHTML += `<button class="filter-btn" data-filter="${category}">${categoryName}</button>`;
    });
    
    filterButtonsContainer.innerHTML = buttonsHTML;
    
    // Re-attach event listeners to new buttons
    const newFilterButtons = document.querySelectorAll('.filter-btn');
    newFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            newFilterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.getAttribute('data-filter');
            let filteredItems = filterMenu(category);
            const sortBy = sortSelect.value;
            let sortedItems = sortMenu(filteredItems, sortBy);
            displayMenuItems(sortedItems);
        });
    });
}

// Get Category Name for Display (branch-specific)
function getCategoryName(category, branch) {
    const sharjahCategories = {
        'juice': '🧃 Fresh Juice',
        'mojito': '🍹 Mojito',
        'milkshake': '🥤 Milkshake',
        'falooda': '🍨 Falooda',
        'special': '🍧 Fruzo Special'
    };
    
    const taliparambaCategories = {
        'icecream': '🍨 Ice Cream Cups',
        'sundae': '🍧 Great Sundae',
        'falooda': '🍨 Falooda',
        'smoothies': '🍓 Smoothies',
        'specials': '🍧 Fruzo Specials',
        'juices': '🧃 Juices',
        'iceshakes': '🥤 Ice Cream Shakes',
        'milkshakes': '🥤 Milkshakes',
        'snacks': '🍟 Snacks',
        'burgers': '🍔 Burgers',
        'shawarma': '🍗 Shawarma'
    };
    
    if (branch === 'sharjah') {
        return sharjahCategories[category] || category;
    } else {
        return taliparambaCategories[category] || category;
    }
}

// Display Menu Items with branch-specific currency
function displayMenuItems(items) {
    menuItemsContainer.innerHTML = '';
    
    if (items.length === 0) {
        menuItemsContainer.innerHTML = '<p class="no-items">No items found in this category.</p>';
        return;
    }
    
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = `menu-item ${item.category}`;
        
        const currencySymbol = currentBranch === 'sharjah' ? 'AED' : '₹';
        const priceDisplay = currentBranch === 'sharjah' ? item.price.toFixed(2) : item.price;
        
        menuItem.innerHTML = `
            <div class="menu-item-left">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                </div>
                <p class="menu-item-description">${item.description}</p>
            </div>
            <div class="menu-item-right">
                <span class="menu-item-category">${getCategoryName(item.category, currentBranch)}</span>
                <div class="menu-item-price">${currencySymbol} ${priceDisplay}</div>
            </div>
        `;
        menuItemsContainer.appendChild(menuItem);
    });
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
    createFilterButtons(currentBranch);
    let filteredItems = filterMenu('all');
    let sortedItems = sortMenu(filteredItems, 'name');
    displayMenuItems(sortedItems);
}

// Event Listeners for Branch Selection
branchButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all branch buttons
        branchButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        // Switch menu based on branch
        const branch = button.getAttribute('data-branch');
        currentBranch = branch;

        if (branch === 'sharjah') {
            menuItems = sharjahMenuItems;
        } else if (branch === 'taliparamba') {
            menuItems = taliparambaMenuItems;
        }

        // Create new filter buttons for this branch
        createFilterButtons(branch);

        // Reset to 'all' filter and refresh display
        let filteredItems = filterMenu('all');
        let sortedItems = sortMenu(filteredItems, 'name');
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