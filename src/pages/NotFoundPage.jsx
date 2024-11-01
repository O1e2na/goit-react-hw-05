  /*    import axios from 'axios';


const API_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`, 
  },
});

// Функції для запитів
export const fetchTrendingMovies = () => 
  instance.get('/trending/movie/day').then(res => res.data);

export const fetchMoviesByQuery = (query) => 
  instance.get('/search/movie', { params: { query } }).then(res => res.data);

export const fetchMovieDetails = (movieId) => 
  instance.get(`/movie/${movieId}`).then(res => res.data);

export const fetchMovieCast = (movieId) => 
  instance.get(`/movie/${movieId}/credits`).then(res => res.data);

export const fetchMovieReviews = (movieId) => 
  instance.get(`/movie/${movieId}/reviews`).then(res => res.data); */