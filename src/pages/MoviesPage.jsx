import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from '../api/movies';
import SearchBox from '../components/SearchBox/SearchBox';
import MovieList from '../components/MovieList/MovieList';

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const query = searchParams.get('query') || '';

    useEffect(() => {
        const getMovies = async () => {
            if (query) {
                setLoading(true);
                setError(null);

                try {
                    const results = await fetchMoviesByQuery(query);
                    setMovies(results);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
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
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <MovieList movies={movies} />
        </div>
    );
};

export default MoviesPage;
