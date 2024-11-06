/*import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();  // Отримуємо ID фільму з URL
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'f92580067068a661efe5beaa9b0671bd'; // Ваш API ключ
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(err => setError('Failed to fetch movie details.'));
  }, [movieId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    </div>
  );
};

export default MovieDetailsPage;*/

import { useEffect, useState } from 'react';

const MovieDetailsPage = () => {
  // Стан для збереження даних про фільм
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Викликаємо API для отримання деталей фільму
    const movieId = 550; // ID фільму
    const apiKey = 'f92580067068a661efe5beaa9b0671bd'; // Ваш API ключ
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
    
    // Логування для перевірки виконання запиту
    console.log('Fetching movie details...');
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Логування отриманих даних
        setMovie(data);  // Встановлюємо отримані дані
      })
      .catch(err => {
        console.error(err); // Логування помилок
        setError('Failed to fetch movie details.');
      });
  }, []); // Порожній масив залежностей для одного виклику при монтуванні компонента

  // Якщо є помилка, виводимо повідомлення
  if (error) {
    return <p>{error}</p>;
  }

  // Якщо дані ще не завантажились, показуємо індикатор
  if (!movie) {
    return <p>Loading...</p>;
  }

  // Повертаємо відображення даних фільму
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    </div>
  );
};

export default MovieDetailsPage;

