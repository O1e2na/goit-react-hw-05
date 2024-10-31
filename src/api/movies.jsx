// src/api/movies.jsx

const API_KEY = 'f92580067068a661efe5beaa9b0671bd'; 
const API_URL = 'https://api.themoviedb.org/3/movie'; 


export const fetchTrendingMovies = async () => {
    const response = await fetch(`${API_URL}/popular?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data.results; 
};


export const fetchMovieById = async (id) => {
    const response = await fetch(`${API_URL}/${id}?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Failed to fetch movie');
    }
    const data = await response.json();
    return data; // Повертаємо дані фільму
};


export const fetchMoviesByQuery = async (query) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
    if (!response.ok) {
        throw new Error('Failed to fetch movies by query');
    }
    const data = await response.json();
    return data.results; // Повертаємо результати
};
