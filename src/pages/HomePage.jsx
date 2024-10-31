// src/pages/HomePage.jsx
import { useEffect } from 'react';
import { fetchTrendingMovies } from '../api/movies'; // Переконайтеся, що шлях вірний
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, setLoading, setError } from '../redux/actions'; // Ваші дії

const HomePage = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state.yourSlice); // Змінити 'yourSlice' на ваш редюсер

  useEffect(() => {
    const loadMovies = async () => {
      dispatch(setLoading(true));
      try {
        const movies = await fetchTrendingMovies();
        dispatch(setMovies(movies));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    loadMovies();
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {movies && movies.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          {/* Відобразити інші деталі фільму */}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
