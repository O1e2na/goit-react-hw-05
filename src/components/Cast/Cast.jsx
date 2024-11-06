import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../api/movies'; // Переконайтеся, що цей імпорт правильний

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      {cast.length > 0 ? (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available</p>
      )}
    </div>
  );
};

export default Cast;
