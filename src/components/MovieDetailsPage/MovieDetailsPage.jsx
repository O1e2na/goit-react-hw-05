import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams(); // Отримуємо ID фільму з URL
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation(); // Отримуємо поточне місцезнаходження
  const navigate = useNavigate(); // Хук для навігації

  useEffect(() => {
    const apiKey = 'f92580067068a661efe5beaa9b0671bd'; // Ваш API ключ
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch movie details.');
        }
        return response.json();
      })
      .then(data => {
        setMovie(data);
      })
      .catch(err => {
        setError('Failed to fetch movie details.');
        console.error(err);
      });
  }, [movieId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <p>Loading...</p>;
  }

  // Функція для повернення назад
  const goBack = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from); // Повертаємось до попереднього маршруту
    } else {
      navigate('/movies'); // Якщо об'єкт місцезнаходження не зберігся, повертаємось на /movies
    }
  };

  return (
    <div>
      <button onClick={goBack}>Go back</button> {/* Кнопка для повернення назад */}
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      {movie.poster_path ? (
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;
