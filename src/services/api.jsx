import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3f92580067068a661efe5beaa9b0671bd';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTI1ODAwNjcwNjhhNjYxZWZlNWJlYWE5YjA2NzFiZCIsIm5iZiI6MTczMDIwNjk1Mi41ODA0MzYsInN1YiI6IjY3MWZiMDBlNDI3YzVjMTlmMDI2N2E1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._IovASdKHhPw1peT4X5KIHWnmHFozdrZPB41c - lCtFM';

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: API_TOKEN,
  },
});

export const fetchTrendingMovies = () => instance.get('/trending/movie/day').then(res => res.data);
export const fetchMoviesByQuery = (query) => instance.get(`/search/movie`, { params: { query } }).then(res => res.data);
export const fetchMovieDetails = (movieId) => instance.get(`/movie/${movieId}`).then(res => res.data);
export const fetchMovieCast = (movieId) => instance.get(`/movie/${movieId}/credits`).then(res => res.data);
export const fetchMovieReviews = (movieId) => instance.get(`/movie/${movieId}/reviews`).then(res => res.data);
