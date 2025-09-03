// Shop Detail Page JavaScript

// Shop data - in a real application, this would come from a database
const shopData = {
    'trendy-threads': {
        name: 'Trendy Threads',
        category: 'Clothing & Fashion',
        description: 'Contemporary fashion for men and women with the latest trends and styles. We offer a wide selection of clothing, footwear, and accessories for all ages and occasions.',
        location: 'Level 1, Section A',
        hours: '9:00 AM - 9:00 PM',
        phone: '(555) 123-4567',
        email: 'info@trendythreads.com',
        website: 'www.trendythreads.com',
        level: 'Level 1',
        section: 'Section A',
        nearby: 'Food Court & Main Entrance',
        logoIcon: '👕',
        logoText: 'TT',
        features: [
            { icon: '👕', text: 'Men\'s Clothing' },
            { icon: '👗', text: 'Women\'s Fashion' },
            { icon: '👟', text: 'Footwear' },
            { icon: '👜', text: 'Accessories' },
            { icon: '👶', text: 'Kids Fashion' },
            { icon: '💍', text: 'Jewelry' }
        ],
        offers: [
            { type: 'SALE', title: 'Summer Collection', description: 'Up to 50% off on selected summer items' },
            { type: 'NEW', title: 'Fall Arrivals', description: 'Check out our latest fall fashion collection' },
            { type: 'SALE', title: 'Student Discount', description: '15% off with valid student ID' }
        ]
    },
    'style-factory': {
        name: 'Style Factory',
        category: 'Clothing & Fashion',
        description: 'Premium clothing store offering designer brands and exclusive collections. We specialize in high-end fashion for discerning customers who appreciate quality and style.',
        location: 'Level 1, Section B',
        hours: '9:00 AM - 9:00 PM',
        phone: '(555) 234-5678',
        email: 'contact@stylefactory.com',
        website: 'www.stylefactory.com',
        level: 'Level 1',
        section: 'Section B',
        nearby: 'Main Entrance & Elevators',
        logoIcon: '👗',
        logoText: 'SF',
        features: [
            { icon: '👔', text: 'Designer Brands' },
            { icon: '👗', text: 'Luxury Fashion' },
            { icon: '👠', text: 'Premium Footwear' },
            { icon: '👜', text: 'Handbags' },
            { icon: '💎', text: 'Fine Jewelry' },
            { icon: '🧥', text: 'Outerwear' }
        ],
        offers: [
            { type: 'VIP', title: 'VIP Membership', description: 'Exclusive access to new collections and private sales' },
            { type: 'NEW', title: 'Limited Edition', description: 'Exclusive designer pieces available only here' }
        ]
    },
    'tech-haven': {
        name: 'Tech Haven',
        category: 'Electronics & Technology',
        description: 'Latest gadgets, smartphones, laptops, and tech accessories. We carry all major brands and offer expert advice on choosing the right technology for your needs.',
        location: 'Level 2, Section A',
        hours: '9:00 AM - 9:00 PM',
        phone: '(555) 345-6789',
        email: 'support@techhaven.com',
        website: 'www.techhaven.com',
        level: 'Level 2',
        section: 'Section A',
        nearby: 'Escalators & Restrooms',
        logoIcon: '💻',
        logoText: 'TH',
        features: [
            { icon: '📱', text: 'Smartphones' },
            { icon: '💻', text: 'Laptops & PCs' },
            { icon: '⌚', text: 'Smartwatches' },
            { icon: '🎧', text: 'Audio Equipment' },
            { icon: '📷', text: 'Cameras' },
            { icon: '🎮', text: 'Gaming' }
        ],
        offers: [
            { type: 'SALE', title: 'Back to School', description: 'Special discounts on laptops and tablets for students' },
            { type: 'NEW', title: 'Latest iPhone', description: 'Pre-order the newest iPhone model' }
        ]
    },
    'fresh-market': {
        name: 'Fresh Market',
        category: 'Supermarket & Groceries',
        description: 'Fresh produce, groceries, and household essentials for your daily needs. We source the highest quality products and offer competitive prices.',
        location: 'Level 1, Section C',
        hours: '7:00 AM - 10:00 PM',
        phone: '(555) 456-7890',
        email: 'info@freshmarket.com',
        website: 'www.freshmarket.com',
        level: 'Level 1',
        section: 'Section C',
        nearby: 'Parking Garage & Food Court',
        logoIcon: '🛒',
        logoText: 'FM',
        features: [
            { icon: '🥬', text: 'Fresh Produce' },
            { icon: '🥩', text: 'Meat & Seafood' },
            { icon: '🥛', text: 'Dairy Products' },
            { icon: '🍞', text: 'Bakery' },
            { icon: '🧴', text: 'Household' },
            { icon: '🍷', text: 'Wine & Beer' }
        ],
        offers: [
            { type: 'SALE', text: 'Weekly Specials', description: 'Check our weekly flyer for amazing deals' },
            { type: 'NEW', text: 'Organic Section', description: 'New organic and natural products available' }
        ]
    },
    'coastal-bites': {
        name: 'Coastal Bites',
        category: 'Restaurant & Dining',
        description: 'Seafood restaurant serving fresh coastal cuisine in a relaxed atmosphere. Our menu features the finest seafood dishes prepared with local ingredients.',
        location: 'Level 2, Section B',
        hours: '11:00 AM - 11:00 PM',
        phone: '(555) 567-8901',
        email: 'reservations@coastalbites.com',
        website: 'www.coastalbites.com',
        level: 'Level 2',
        section: 'Section B',
        nearby: 'Movie Theater & Parking',
        logoIcon: '🐟',
        logoText: 'CB',
        features: [
            { icon: '🐟', text: 'Fresh Seafood' },
            { icon: '🍷', text: 'Wine Selection' },
            { icon: '🌊', text: 'Ocean View' },
            { icon: '👨‍🍳', text: 'Chef Specials' },
            { icon: '🍰', text: 'Desserts' },
            { icon: '🥂', text: 'Cocktails' }
        ],
        offers: [
            { type: 'SALE', title: 'Happy Hour', description: '50% off appetizers and drinks 4-6 PM daily' },
            { type: 'NEW', title: 'Chef\'s Table', description: 'Experience our exclusive chef\'s table dining' }
        ]
    },
    'pizza-palace': {
        name: 'Pizza Palace',
        category: 'Restaurant & Dining',
        description: 'Authentic Italian pizza and pasta made with fresh ingredients. We use traditional recipes and the finest imported ingredients to create authentic Italian flavors.',
        location: 'Level 1, Food Court',
        hours: '10:00 AM - 10:00 PM',
        phone: '(555) 678-9012',
        email: 'orders@pizzapalace.com',
        website: 'www.pizzapalace.com',
        level: 'Level 1',
        section: 'Food Court',
        nearby: 'Main Food Court & Seating',
        logoIcon: '🍕',
        logoText: 'PP',
        features: [
            { icon: '🍕', text: 'Authentic Pizza' },
            { icon: '🍝', text: 'Fresh Pasta' },
            { icon: '🥗', text: 'Salads' },
            { icon: '🍰', text: 'Tiramisu' },
            { icon: '🍷', text: 'Italian Wine' },
            { icon: '☕', text: 'Espresso' }
        ],
        offers: [
            { type: 'SALE', title: 'Lunch Special', description: 'Pizza + Drink + Salad for $12.99 (11 AM - 3 PM)' },
            { type: 'NEW', title: 'Gluten-Free Options', description: 'New gluten-free pizza and pasta available' }
        ]
    },
    'beauty-glow': {
        name: 'Beauty Glow',
        category: 'Beauty & Health',
        description: 'Cosmetics, skincare, and beauty products from top international brands. Our beauty consultants are trained to help you find the perfect products for your skin type.',
        location: 'Level 2, Section C',
        hours: '9:00 AM - 9:00 PM',
        phone: '(555) 789-0123',
        email: 'beauty@beautyglow.com',
        website: 'www.beautyglow.com',
        level: 'Level 2',
        section: 'Section C',
        nearby: 'Beauty Salon & Pharmacy',
        logoIcon: '💄',
        logoText: 'BG',
        features: [
            { icon: '💄', text: 'Makeup' },
            { icon: '🧴', text: 'Skincare' },
            { icon: '💅', text: 'Nail Care' },
            { icon: '🧴', text: 'Hair Care' },
            { icon: '👃', text: 'Fragrances' },
            { icon: '🪞', text: 'Beauty Tools' }
        ],
        offers: [
            { type: 'SALE', title: 'Beauty Box', description: 'Free beauty box with $50 purchase' },
            { type: 'NEW', title: 'Organic Line', description: 'New organic and natural beauty products' }
        ]
    },
    'sports-fit': {
        name: 'Sports Fit',
        category: 'Sports & Fitness',
        description: 'Sports equipment, athletic wear, and fitness accessories for all levels. Whether you\'re a beginner or professional athlete, we have everything you need.',
        location: 'Level 2, Section D',
        hours: '9:00 AM - 9:00 PM',
        phone: '(555) 890-1234',
        email: 'info@sportsfit.com',
        website: 'www.sportsfit.com',
        level: 'Level 2',
        section: 'Section D',
        nearby: 'Fitness Center & Pool',
        logoIcon: '⚽',
        logoText: 'SF',
        features: [
            { icon: '⚽', text: 'Team Sports' },
            { icon: '🏃', text: 'Running' },
            { icon: '🏋️', text: 'Fitness' },
            { icon: '🏊', text: 'Swimming' },
            { icon: '🚴', text: 'Cycling' },
            { icon: '🧘', text: 'Yoga' }
        ],
        offers: [
            { type: 'SALE', title: 'Fitness Sale', description: 'Up to 40% off on fitness equipment and apparel' },
            { type: 'NEW', title: 'Personal Training', description: 'Book a session with our certified trainers' }
        ]
    }
};

// Get shop ID from URL
function getShopId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Update page content based on shop data
function updateShopDetails(shopId) {
    const shop = shopData[shopId];
    if (!shop) {
        // Shop not found, redirect to shops page
        window.location.href = 'shops.html';
        return;
    }

    // Update page title
    document.title = `${shop.name} - Pine City Mall`;

    // Update hero section
    document.getElementById('shop-name').textContent = shop.name;
    document.getElementById('shop-category').textContent = shop.category;
    document.getElementById('shop-location').textContent = `📍 ${shop.location}`;
    document.getElementById('shop-hours').textContent = `🕒 ${shop.hours}`;

    // Update logo
    document.querySelector('.logo-icon-large').textContent = shop.logoIcon;
    document.querySelector('.logo-text-large').textContent = shop.logoText;

    // Update description
    document.getElementById('shop-description').textContent = shop.description;

    // Update features
    const featuresContainer = document.getElementById('shop-features');
    featuresContainer.innerHTML = shop.features.map(feature => 
        `<div class="feature-item">
            <span class="feature-icon">${feature.icon}</span>
            <span>${feature.text}</span>
        </div>`
    ).join('');

    // Update offers
    const offersContainer = document.getElementById('shop-offers');
    offersContainer.innerHTML = shop.offers.map(offer => 
        `<div class="offer-item">
            <div class="offer-badge">${offer.type}</div>
            <h3>${offer.title}</h3>
            <p>${offer.description}</p>
        </div>`
    ).join('');

    // Update contact information
    document.getElementById('shop-phone').textContent = shop.phone;
    document.getElementById('shop-email').textContent = shop.email;
    document.getElementById('shop-website').textContent = shop.website;
    document.getElementById('shop-website').href = `https://${shop.website}`;

    // Update location information
    document.getElementById('shop-level').textContent = shop.level;
    document.getElementById('shop-section').textContent = shop.section;
    document.getElementById('shop-nearby').textContent = shop.nearby;

    // Update related shops
    updateRelatedShops(shopId);
}

// Update related shops section
function updateRelatedShops(currentShopId) {
    const relatedShopsContainer = document.getElementById('related-shops');
    const currentShop = shopData[currentShopId];
    
    // Get shops in the same category (excluding current shop)
    const relatedShops = Object.entries(shopData)
        .filter(([id, shop]) => id !== currentShopId && shop.category === currentShop.category)
        .slice(0, 3); // Show max 3 related shops

    if (relatedShops.length === 0) {
        // If no shops in same category, show random shops
        const randomShops = Object.entries(shopData)
            .filter(([id]) => id !== currentShopId)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
        relatedShops.push(...randomShops);
    }

    relatedShopsContainer.innerHTML = relatedShops.map(([id, shop]) => 
        `<div class="related-shop-card">
            <div class="related-shop-logo">
                <div class="logo-icon">${shop.logoIcon}</div>
                <div class="logo-text">${shop.logoText}</div>
            </div>
            <h3>${shop.name}</h3>
            <p>${shop.description.substring(0, 100)}...</p>
            <a href="shop-detail.html?id=${id}" class="related-shop-link">View Details →</a>
        </div>`
    ).join('');
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const shopId = getShopId();
    if (shopId) {
        updateShopDetails(shopId);
    } else {
        // No shop ID provided, redirect to shops page
        window.location.href = 'shops.html';
    }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
