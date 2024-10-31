import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesError } from '../redux/reducers/moviesSlice'; // імпортуйте ваші дії
import { fetchTrendingMovies } from '../api/movies'; // ваш API для отримання даних

const HomePage = () => {
    const dispatch = useDispatch();
    
    // Витягуємо дані з Redux store
    const movies = useSelector((state) => state.movies.items);
    const loading = useSelector((state) => state.movies.loading);
    const error = useSelector((state) => state.movies.error);

    // Використовуємо useEffect для отримання фільмів
    useEffect(() => {
        const fetchMovies = async () => {
            dispatch(fetchMoviesStart());
            try {
                const data = await fetchTrendingMovies();
                dispatch(fetchMoviesSuccess(data.results)); // Або інша відповідна структура даних
            } catch (error) {
                dispatch(fetchMoviesError(error.message));
            }
        };

        fetchMovies();
    }, [dispatch]);

    return (
        <div>
            <h1>Trending Movies</h1>
            {/* Показуємо стан завантаження */}
            {loading && <p>Loading...</p>}
            {/* Показуємо помилку, якщо є */}
            {error && <p>Error: {error}</p>}
            {/* Відображаємо список фільмів */}
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title}</li> // Замініть 'title' на поле вашого об'єкта фільму
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
