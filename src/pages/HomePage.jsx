import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../services/api';
import MovieList from '../components/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(data => setMovies(data.results));
  }, []);

  return <MovieList movies={movies} />;
};

export default HomePage;

