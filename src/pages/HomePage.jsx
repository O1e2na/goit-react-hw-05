// src/pages/HomePage.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesError } from '../redux/reducers/moviesSlice';
import { fetchTrendingMovies } from '../api/movies';

const HomePage = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.movies);

    useEffect(() => {
        const loadMovies = async () => {
            dispatch(fetchMoviesStart());
            try {
                const movies = await fetchTrendingMovies();
                dispatch(fetchMoviesSuccess(movies));
            } catch (err) {
                dispatch(fetchMoviesError(err.message));
            }
        };

        loadMovies();
    }, [dispatch]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {items && items.length > 0 ? (
                    items.map((movie) => (
                        <li key={movie.id}>{movie.title}</li>
                    ))
                ) : (
                    <p>No movies found.</p> // Повідомлення, якщо немає фільмів
                )}
            </ul>
        </div>
    );
};

export default HomePage;
