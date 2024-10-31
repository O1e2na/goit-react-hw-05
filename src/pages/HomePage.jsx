// src/pages/HomePage.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingMovies } from '../api/movies';
import MovieList from '../components/MovieList/MovieList';

const HomePage = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector(state => state.movies.trendingMovies);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        dispatch({ type: 'SET_TRENDING_MOVIES', payload: movies });
      } catch (error) {
        console.error('Failed to fetch trending movies:', error);
      }
    };

    getTrendingMovies();
  }, [dispatch]);

  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default HomePage;
