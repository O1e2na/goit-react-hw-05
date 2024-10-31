import axios from 'axios';


const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',  
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,  
  },
});


export const fetchTrendingMovies = () => 
  instance.get('/trending/movie/day').then(res => res.data);

export const fetchMoviesByQuery = (query) => 
  instance.get('/search/movie', { params: { query } }).then(res => res.data);

export const fetchMovieDetails = (movieId) => 
  instance.get(`/movie/${movieId}`).then(res => res.data);

export const fetchMovieCast = (movieId) => 
  instance.get(`/movie/${movieId}/credits`).then(res => res.data);

export const fetchMovieReviews = (movieId) => 
  instance.get(`/movie/${movieId}/reviews`).then(res => res.data);
