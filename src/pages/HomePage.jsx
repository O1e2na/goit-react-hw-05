// src/pages/HomePage.jsx
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../api/movies';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const moviesData = await fetchTrendingMovies();
                setMovies(moviesData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getMovies();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Trending Movies</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
