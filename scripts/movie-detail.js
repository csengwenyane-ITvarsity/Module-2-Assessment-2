// Movie Detail Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get movie ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    
    if (!movieId) {
        // Redirect to movies page if no movie ID
        window.location.href = 'movies.html';
        return;
    }
    
    // Movie database
    const movies = {
        'thunder-force': {
            title: 'Thunder Force',
            genre: 'Action • Adventure',
            poster: 'images/movie1.jpg',
            ageRestriction: 'PG-13',
            duration: '2h 15m',
            rating: '8.2/10',
            releaseDate: '2024',
            synopsis: 'When a mysterious force threatens the world, an elite team of special agents must band together to stop the impending disaster. Packed with explosive action sequences and heart-pounding adventure, this blockbuster follows the journey of heroes who will stop at nothing to save humanity.',
            cast: 'Starring: Chris Evans, Ryan Gosling, Ana de Armas, Idris Elba, and Charlize Theron',
            showtimes: ['10:00 AM', '1:30 PM', '5:00 PM', '8:30 PM'],
            gallery: [
                'images/movie1.jpg',
                'images/movie1.jpg',
                'images/movie1.jpg'
            ]
        },
        'laugh-factory': {
            title: 'Laugh Factory',
            genre: 'Comedy • Family',
            poster: 'images/movie2.jpg',
            ageRestriction: 'PG',
            duration: '1h 45m',
            rating: '7.8/10',
            releaseDate: '2024',
            synopsis: 'A hilarious family comedy that follows the misadventures of a struggling comedy club owner who must save his business while dealing with his eccentric family. Filled with witty humor and heartwarming moments, this film proves that laughter truly is the best medicine.',
            cast: 'Starring: Will Ferrell, Melissa McCarthy, Kevin Hart, Tiffany Haddish, and Steve Carell',
            showtimes: ['11:00 AM', '2:15 PM', '6:30 PM', '9:15 PM'],
            gallery: [
                'images/movie2.jpg',
                'images/movie2.jpg',
                'images/movie2.jpg'
            ]
        },
        'silent-echo': {
            title: 'The Silent Echo',
            genre: 'Drama • Mystery',
            poster: 'images/movie3.jpg',
            ageRestriction: 'R',
            duration: '2h 30m',
            rating: '9.1/10',
            releaseDate: '2024',
            synopsis: 'A gripping psychological drama that explores the depths of human emotion and the mysteries that lie within. When a renowned psychologist takes on a challenging case, she discovers that the truth is more complex than anyone could have imagined. A masterful exploration of the human psyche.',
            cast: 'Starring: Meryl Streep, Tom Hanks, Viola Davis, Mahershala Ali, and Julianne Moore',
            showtimes: ['12:00 PM', '3:45 PM', '7:15 PM', '10:45 PM'],
            gallery: [
                'images/movie3.jpg',
                'images/movie3.jpg',
                'images/movie3.jpg'
            ]
        },
        'galaxy-quest': {
            title: 'Galaxy Quest',
            genre: 'Sci-Fi • Adventure',
            poster: 'images/movie4.jpg',
            ageRestriction: 'PG-13',
            duration: '2h 5m',
            rating: '8.5/10',
            releaseDate: '2024',
            synopsis: 'An epic space adventure that takes audiences on a journey across the galaxy. When Earth faces an alien threat, a team of astronauts must venture into the unknown to save humanity. With stunning visual effects and a compelling story, this film redefines the sci-fi genre.',
            cast: 'Starring: Robert Downey Jr., Scarlett Johansson, Chris Hemsworth, Mark Ruffalo, and Chris Evans',
            showtimes: ['10:30 AM', '2:00 PM', '5:30 PM', '9:00 PM'],
            gallery: [
                'images/movie4.jpg',
                'images/movie4.jpg',
                'images/movie4.jpg'
            ]
        },
        'magic-kingdom': {
            title: 'Magic Kingdom',
            genre: 'Family • Animation',
            poster: 'images/movie5.jpg',
            ageRestriction: 'G',
            duration: '1h 55m',
            rating: '8.7/10',
            releaseDate: '2024',
            synopsis: 'A magical animated adventure that brings the wonder of childhood to life. Follow the journey of a young hero who discovers a hidden kingdom filled with enchanting creatures and magical powers. Perfect for the whole family, this heartwarming tale celebrates friendship, courage, and the power of imagination.',
            cast: 'Starring: Tom Hanks, Emma Stone, Idris Elba, Kristen Bell, and Dwayne Johnson',
            showtimes: ['9:30 AM', '12:30 PM', '4:00 PM', '7:00 PM'],
            gallery: [
                'images/movie5.jpg',
                'images/movie5.jpg',
                'images/movie5.jpg'
            ]
        },
        'shadow-protocol': {
            title: 'Shadow Protocol',
            genre: 'Thriller • Mystery',
            poster: 'images/movie6.jpeg',
            ageRestriction: 'R',
            duration: '2h 10m',
            rating: '8.9/10',
            releaseDate: '2024',
            synopsis: 'A pulse-pounding thriller that keeps audiences on the edge of their seats. When a government agent discovers a conspiracy that goes to the highest levels, she must navigate a dangerous web of deception and betrayal. With twists and turns at every corner, this film delivers non-stop suspense.',
            cast: 'Starring: Denzel Washington, Charlize Theron, Jake Gyllenhaal, Sandra Bullock, and Liam Neeson',
            showtimes: ['11:30 AM', '3:00 PM', '6:45 PM', '10:15 PM'],
            gallery: [
                'images/movie6.jpeg',
                'images/movie6.jpeg',
                'images/movie6.jpeg'
            ]
        }
    };
    
    // Get movie data
    const movie = movies[movieId];
    
    if (!movie) {
        // Redirect to movies page if movie not found
        window.location.href = 'movies.html';
        return;
    }
    
    // Update page title
    document.title = `${movie.title} - Pine City Mall`;
    
    // Populate movie details
    document.getElementById('movie-title').textContent = movie.title;
    document.getElementById('movie-genre').textContent = movie.genre;
    document.getElementById('movie-poster-img').src = movie.poster;
    document.getElementById('movie-poster-img').alt = `${movie.title} Poster`;
    document.getElementById('age-restriction').textContent = movie.ageRestriction;
    document.getElementById('movie-duration').textContent = movie.duration;
    document.getElementById('movie-rating').textContent = movie.rating;
    document.getElementById('movie-release-date').textContent = movie.releaseDate;
    document.getElementById('movie-synopsis').textContent = movie.synopsis;
    document.getElementById('movie-cast').textContent = movie.cast;
    
    // Populate showtimes
    const showtimesGrid = document.getElementById('showtimes-grid');
    showtimesGrid.innerHTML = '';
    movie.showtimes.forEach(time => {
        const timeSlot = document.createElement('span');
        timeSlot.className = 'time-slot';
        timeSlot.textContent = time;
        timeSlot.addEventListener('click', () => {
            alert(`Booking tickets for ${movie.title} at ${time}`);
        });
        showtimesGrid.appendChild(timeSlot);
    });
    
    // Populate gallery
    const movieGallery = document.getElementById('movie-gallery');
    movieGallery.innerHTML = '';
    movie.gallery.forEach((imageUrl, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `${movie.title} Scene ${index + 1}`;
        img.addEventListener('click', () => {
            // Open image in lightbox or new tab
            window.open(imageUrl, '_blank');
        });
        
        galleryItem.appendChild(img);
        movieGallery.appendChild(galleryItem);
    });
    
    // Add event listeners for action buttons
    const bookTicketsBtn = document.getElementById('book-tickets');
    const watchTrailerBtn = document.getElementById('watch-trailer');
    
    console.log('Book tickets button found:', bookTicketsBtn);
    console.log('Watch trailer button found:', watchTrailerBtn);
    
    // Add event listener for book tickets button
    if (bookTicketsBtn) {
        bookTicketsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Book tickets button clicked for:', movie.title);
            
            // Create a more interactive booking experience
            const selectedTime = prompt(`Select a showtime for ${movie.title}:\n${movie.showtimes.join('\n')}`);
            
            if (selectedTime && movie.showtimes.includes(selectedTime)) {
                const numTickets = prompt(`How many tickets would you like for ${selectedTime}? (1-10)`);
                if (numTickets && !isNaN(numTickets) && numTickets >= 1 && numTickets <= 10) {
                    alert(`🎬 Booking Confirmed!\n\nMovie: ${movie.title}\nShowtime: ${selectedTime}\nTickets: ${numTickets}\n\nYou will receive a confirmation email shortly.`);
                } else {
                    alert('Invalid number of tickets. Please try again.');
                }
            } else if (selectedTime) {
                alert('Invalid showtime selected. Please try again.');
            }
        });
    } else {
        console.error('Book tickets button not found!');
    }
    
    // Add event listener for watch trailer button
    if (watchTrailerBtn) {
        watchTrailerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Watch trailer button clicked for:', movie.title);
            alert(`Opening trailer for ${movie.title}\n\nNote: This would typically open a video player or redirect to a trailer page.`);
        });
    } else {
        console.error('Watch trailer button not found!');
    }
    
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
    
    // Add loading animation
    const moviePoster = document.getElementById('movie-poster-img');
    moviePoster.style.opacity = '0';
    moviePoster.style.transform = 'scale(0.9)';
    
    moviePoster.addEventListener('load', function() {
        moviePoster.style.transition = 'all 0.5s ease';
        moviePoster.style.opacity = '1';
        moviePoster.style.transform = 'scale(1)';
    });
    
    // Add keyboard navigation for accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Go back to movies page
            window.location.href = 'movies.html';
        }
    });
    
    // Add print functionality
    const printButton = document.createElement('button');
    printButton.textContent = '🖨️ Print Movie Info';
    printButton.className = 'secondary-button';
    printButton.style.marginTop = '1rem';
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    document.querySelector('.movie-actions').appendChild(printButton);
    
    // Add print styles
    const printStyles = document.createElement('style');
    printStyles.textContent = `
        @media print {
            .navbar, .footer, .hamburger, .movie-actions, .back-link { display: none !important; }
            .movie-detail-container { grid-template-columns: 1fr !important; }
            .movie-poster-section { position: static !important; }
            body { font-size: 12pt; }
            .container { max-width: none !important; padding: 0 !important; }
        }
    `;
    document.head.appendChild(printStyles);
});
