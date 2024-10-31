import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from '../api/movies';
import SearchBox from '../components/SearchBox/SearchBox'; 
import MovieList from '../components/MovieList/MovieList'; 

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const getMovies = async () => {
      if (query) {
        const movies = await fetchMoviesByQuery(query);
        setMovies(movies);
      }
    };

    getMovies();
  }, [query]);

  const handleSearch = (newQuery) => {
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
