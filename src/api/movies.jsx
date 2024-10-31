// src/api/movies.jsx
const API_KEY = 'f92580067068a661efe5beaa9b0671bd'; // Зберігаємо ключ API
const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`; // Використовуємо ключ у запиті

export const fetchTrendingMovies = async () => {
    const response = await fetch(API_URL); // Виклик API
    if (!response.ok) {
        throw new Error('Failed to fetch movies'); // Обробка помилки
    }
    const data = await response.json();
    return data.results; // Повертаємо масив фільмів
};
