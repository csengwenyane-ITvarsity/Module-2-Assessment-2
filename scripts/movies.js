// Movies Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Movies page JavaScript loaded');
    
    // Movie data for search functionality
    const moviesData = [
        {
            id: 'thunder-force',
            title: 'Thunder Force',
            genre: 'Action • Adventure',
            actors: 'Chris Evans, Ryan Gosling, Ana de Armas',
            category: 'action',
            element: null
        },
        {
            id: 'laugh-factory',
            title: 'Laugh Factory',
            genre: 'Comedy • Family',
            actors: 'Will Ferrell, Melissa McCarthy, Kevin Hart',
            category: 'comedy',
            element: null
        },
        {
            id: 'silent-echo',
            title: 'The Silent Echo',
            genre: 'Drama • Mystery',
            actors: 'Meryl Streep, Tom Hanks, Viola Davis',
            category: 'drama',
            element: null
        },
        {
            id: 'galaxy-quest',
            title: 'Galaxy Quest',
            genre: 'Sci-Fi • Adventure',
            actors: 'Robert Downey Jr., Scarlett Johansson, Chris Hemsworth',
            category: 'sci-fi',
            element: null
        },
        {
            id: 'magic-kingdom',
            title: 'Magic Kingdom',
            genre: 'Family • Animation',
            actors: 'Tom Hanks, Emma Stone, Idris Elba',
            category: 'family',
            element: null
        },
        {
            id: 'shadow-protocol',
            title: 'Shadow Protocol',
            genre: 'Thriller • Mystery',
            actors: 'Denzel Washington, Charlize Theron, Jake Gyllenhaal',
            category: 'thriller',
            element: null
        }
    ];
    
    // Initialize movie elements
    moviesData.forEach(movie => {
        movie.element = document.querySelector(`[data-category="${movie.category}"]`);
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const clearSearchBtn = document.querySelector('.clear-search-btn');
    
    if (searchInput && searchBtn) {
        console.log('Search elements found');
        
        // Search on button click
        searchBtn.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
        
        // Search on Enter key press
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
        
        // Real-time search as user types
        searchInput.addEventListener('input', function() {
            if (this.value.length > 0) {
                performSearch(this.value);
                showClearButton();
            } else {
                // Show all movies if search is empty
                showAllMovies();
                hideClearButton();
            }
        });
        
        // Clear search functionality
        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', function() {
                searchInput.value = '';
                showAllMovies();
                hideClearButton();
                searchInput.focus();
            });
        }
    } else {
        console.error('Search elements not found');
    }
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active filter button
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Clear search input
            if (searchInput) {
                searchInput.value = '';
            }
            
            // Filter movies by category
            filterMoviesByCategory(category);
        });
    });
    
    // Search function
    function performSearch(query) {
        if (!query || query.trim() === '') {
            showAllMovies();
            return;
        }
        
        const searchTerm = query.toLowerCase().trim();
        let hasResults = false;
        
        moviesData.forEach(movie => {
            const titleMatch = movie.title.toLowerCase().includes(searchTerm);
            const actorsMatch = movie.actors.toLowerCase().includes(searchTerm);
            const genreMatch = movie.genre.toLowerCase().includes(searchTerm);
            
            if (titleMatch || actorsMatch || genreMatch) {
                movie.element.style.display = 'block';
                movie.element.classList.add('search-result');
                hasResults = true;
            } else {
                movie.element.style.display = 'none';
                movie.element.classList.remove('search-result');
            }
        });
        
        // Show search results message
        showSearchResultsMessage(hasResults, query);
        
        // Update filter buttons to show "All Genres" as active
        filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('[data-category="all"]').classList.add('active');
    }
    
    // Filter movies by category
    function filterMoviesByCategory(category) {
        moviesData.forEach(movie => {
            if (category === 'all' || movie.category === category) {
                movie.element.style.display = 'block';
                movie.element.classList.remove('search-result');
            } else {
                movie.element.style.display = 'none';
            }
        });
        
        // Clear search results message
        clearSearchResultsMessage();
    }
    
    // Show all movies
    function showAllMovies() {
        moviesData.forEach(movie => {
            movie.element.style.display = 'block';
            movie.element.classList.remove('search-result');
        });
        
        // Clear search results message
        clearSearchResultsMessage();
    }
    
    // Show search results message
    function showSearchResultsMessage(hasResults, query) {
        clearSearchResultsMessage();
        
        const searchSection = document.querySelector('.search-section');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'search-results-message';
        messageDiv.style.cssText = `
            text-align: center;
            margin-top: 1rem;
            padding: 1rem;
            border-radius: 8px;
            font-weight: 500;
        `;
        
        if (hasResults) {
            messageDiv.style.background = 'linear-gradient(135deg, #10B981, #059669)';
            messageDiv.style.color = 'white';
            messageDiv.innerHTML = `🔍 Search results for "<strong>${query}</strong>"`;
        } else {
            messageDiv.style.background = 'linear-gradient(135deg, #EF4444, #DC2626)';
            messageDiv.style.color = 'white';
            messageDiv.innerHTML = `❌ No movies found for "<strong>${query}</strong>"`;
        }
        
        searchSection.appendChild(messageDiv);
    }
    
    // Clear search results message
    function clearSearchResultsMessage() {
        const existingMessage = document.querySelector('.search-results-message');
        if (existingMessage) {
            existingMessage.remove();
        }
    }
    
    // Add search suggestions
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.parentElement.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
        });
        
        searchInput.addEventListener('blur', function() {
            this.parentElement.style.boxShadow = 'none';
        });
    }
    
    // Add loading animation for search
    function showSearchLoading() {
        const searchBtn = document.querySelector('.search-btn');
        if (searchBtn) {
            searchBtn.innerHTML = '⏳';
            searchBtn.style.pointerEvents = 'none';
        }
    }
    
    function hideSearchLoading() {
        const searchBtn = document.querySelector('.search-btn');
        if (searchBtn) {
            searchBtn.innerHTML = '🔍';
            searchBtn.style.pointerEvents = 'auto';
        }
    }
    
    // Enhanced search with loading
    const originalPerformSearch = performSearch;
    performSearch = function(query) {
        showSearchLoading();
        
        // Simulate search delay for better UX
        setTimeout(() => {
            originalPerformSearch(query);
            hideSearchLoading();
        }, 300);
    };
    
    // Show clear button
    function showClearButton() {
        if (clearSearchBtn) {
            clearSearchBtn.style.display = 'flex';
        }
    }
    
    // Hide clear button
    function hideClearButton() {
        if (clearSearchBtn) {
            clearSearchBtn.style.display = 'none';
        }
    }
    
    console.log('Movies page JavaScript initialization complete');
});
