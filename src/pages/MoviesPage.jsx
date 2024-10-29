import { useState } from 'react';
import { fetchMoviesByQuery } from '../services/api';
import MovieList from '../components/MovieList/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await fetchMoviesByQuery(query);
    setMovies(data.results);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
