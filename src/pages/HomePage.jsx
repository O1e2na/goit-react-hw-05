
import { useEffect, useState } from 'react'; // Імпорт useState і useEffect
import MovieList from '../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Замініть на ваш API або локальні дані
    fetch('https://api.example.com/movies/f92580067068a661efe5beaa9b0671bd')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      {/* Переконайтесь, що movies не undefined перед його використанням */}
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
};

export default HomePage;



