// Map page functionality
document.addEventListener('DOMContentLoaded', function() {
    const levelButtons = document.querySelectorAll('.level-btn');
    const floorMaps = document.querySelectorAll('.floor-map');
    
    // Level switching functionality
    levelButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetLevel = this.getAttribute('data-level');
            
            // Remove active class from all buttons and maps
            levelButtons.forEach(btn => btn.classList.remove('active'));
            floorMaps.forEach(map => map.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding floor map
            const targetMap = document.getElementById(`${targetLevel}-floor`);
            if (targetMap) {
                targetMap.classList.add('active');
            }
            
            // Add smooth transition effect
            targetMap.style.opacity = '0';
            targetMap.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                targetMap.style.transition = 'all 0.5s ease';
                targetMap.style.opacity = '1';
                targetMap.style.transform = 'translateY(0)';
            }, 100);
        });
    });
    
    // Shop marker interactions
    const shopMarkers = document.querySelectorAll('.shop-marker, .theater-marker, .entertainment-marker');
    
    shopMarkers.forEach(marker => {
        // Add click functionality to markers
        marker.addEventListener('click', function() {
            const shopId = this.getAttribute('data-shop');
            if (shopId) {
                // Navigate to shop detail page
                window.location.href = `shops.html#${shopId}`;
            }
        });
        
        // Add keyboard navigation
        marker.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Make markers focusable
        marker.setAttribute('tabindex', '0');
        marker.setAttribute('role', 'button');
        marker.setAttribute('aria-label', 'View shop details');
    });
    
    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add search functionality for finding shops on the map
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            shopMarkers.forEach(marker => {
                const tooltip = marker.querySelector('.marker-tooltip');
                const text = tooltip ? tooltip.textContent.toLowerCase() : '';
                
                if (text.includes(searchTerm)) {
                    marker.style.opacity = '1';
                    marker.style.transform = 'scale(1)';
                    marker.style.borderColor = '#84CC16';
                } else {
                    marker.style.opacity = '0.5';
                    marker.style.transform = 'scale(0.95)';
                    marker.style.borderColor = '#e5e7eb';
                }
            });
        });
    }
    
    // Add keyboard navigation for level buttons
    levelButtons.forEach((button, index) => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (index + 1) % levelButtons.length;
                levelButtons[nextIndex].focus();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = (index - 1 + levelButtons.length) % levelButtons.length;
                levelButtons[prevIndex].focus();
            }
        });
    });
    
    // Add accessibility features
    levelButtons.forEach(button => {
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-selected', 'false');
        
        button.addEventListener('click', function() {
            levelButtons.forEach(btn => {
                btn.setAttribute('aria-selected', 'false');
            });
            this.setAttribute('aria-selected', 'true');
        });
    });
    
    // Initialize first button as selected
    const firstButton = levelButtons[0];
    if (firstButton) {
        firstButton.setAttribute('aria-selected', 'true');
    }
    
    // Add smooth animations for map transitions
    floorMaps.forEach(map => {
        map.style.transition = 'all 0.5s ease';
        map.style.opacity = '0';
        map.style.transform = 'translateY(20px)';
    });
    
    // Show first floor map initially
    const firstMap = floorMaps[0];
    if (firstMap) {
        setTimeout(() => {
            firstMap.style.opacity = '1';
            firstMap.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Add hover effects for better user experience
    shopMarkers.forEach(marker => {
        marker.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        marker.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add touch support for mobile devices
    let touchStartX = 0;
    let touchStartY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', function(e) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const diffX = touchStartX - touchEndX;
        const diffY = touchStartY - touchEndY;
        
        // Swipe left/right to change levels
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            const currentActiveButton = document.querySelector('.level-btn.active');
            const currentIndex = Array.from(levelButtons).indexOf(currentActiveButton);
            
            if (diffX > 0 && currentIndex < levelButtons.length - 1) {
                // Swipe left - next level
                levelButtons[currentIndex + 1].click();
            } else if (diffX < 0 && currentIndex > 0) {
                // Swipe right - previous level
                levelButtons[currentIndex - 1].click();
            }
        }
    });
    
    // Add loading animation
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        mapContainer.style.opacity = '0';
        mapContainer.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            mapContainer.style.transition = 'all 0.8s ease';
            mapContainer.style.opacity = '1';
            mapContainer.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Add print styles for map
    const printButton = document.createElement('button');
    printButton.innerHTML = '🖨️ Print Map';
    printButton.className = 'print-btn';
    printButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: linear-gradient(135deg, #84CC16 0%, #65A30D 100%);
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-weight: 500;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    printButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    printButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(printButton);
    
    // Add print styles
    const printStyles = document.createElement('style');
    printStyles.textContent = `
        @media print {
            .navbar, .footer, .print-btn, .hamburger { display: none !important; }
            .map-container { box-shadow: none !important; }
            .floor-map { display: block !important; }
            .floor-map.active { display: block !important; }
            body { background: white !important; }
        }
    `;
    document.head.appendChild(printStyles);
});
