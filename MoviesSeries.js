// Get filter elements
const genreFilter = document.getElementById("genreFilter");
const dateFilter = document.getElementById("dateFilter");
const ratingFilter = document.getElementById("ratingFilter");
const languageFilter = document.getElementById("languageFilter");

// Get movie elements
const movies = document.querySelectorAll(".card");

// Add event listeners to filters
genreFilter.addEventListener("change", filterMovies);
dateFilter.addEventListener("change", filterMovies);
ratingFilter.addEventListener("change", filterMovies);
languageFilter.addEventListener("change", filterMovies);

function filterMovies() {
    const selectedGenre = genreFilter.value;
    const selectedDate = dateFilter.value;
    const selectedRating = ratingFilter.value;
    const selectedLanguage = languageFilter.value;

    movies.forEach(movie => {
        const movieGenre = movie.getAttribute("data-genre");
        const movieDate = movie.getAttribute("data-date");
        const movieRating = movie.getAttribute("data-rating");
        const movieLanguage = movie.getAttribute("data-language");

        const isGenreMatch = selectedGenre === "all" || selectedGenre === movieGenre;
        const isDateMatch = selectedDate === "all" || selectedDate === movieDate;
        const isRatingMatch = selectedRating === "all" || selectedRating === movieRating;
        const isLanguageMatch = selectedLanguage === "all" || selectedLanguage === movieLanguage;

        if (isGenreMatch && isDateMatch && isRatingMatch && isLanguageMatch) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }
    });
}

function resetFilters() {
    genreFilter.value = "all";
    dateFilter.value = "all";
    ratingFilter.value = "all";
    languageFilter.value = "all";
    filterMovies();
    updateMovieDisplay();
}

// Initial filter to show all movies
filterMovies();


// Pagination related code
let currentPage = 1; // starting page
const moviesPerPage = 6;

// Hide all movie cards initially
document.querySelectorAll('.card').forEach(movie => {
    movie.style.display = 'none';
});

// Function to update the display of movies based on the current page
function updateMovieDisplay() {
    const start = (currentPage - 1) * moviesPerPage;
    const end = start + moviesPerPage;

    document.querySelectorAll('.card').forEach((movie, index) => {
        if (index >= start && index < end) {
            movie.style.display = 'block';
        } else {
            movie.style.display = 'none';
        }
    });

    document.getElementById('currentPage').textContent = currentPage;
}

// Initial display
updateMovieDisplay();

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updateMovieDisplay();
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    const totalMovies = document.querySelectorAll('.card').length;
    console.log(totalMovies)
    if (currentPage < Math.ceil(totalMovies / moviesPerPage)) {
        currentPage++;
        updateMovieDisplay();
    }
});
