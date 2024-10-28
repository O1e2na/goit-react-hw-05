import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../services/api';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const goBack = () => {
    navigate(location.state?.from || '/movies');
  };

  if (!movie) return null;

  return (
    <>
      <button onClick={goBack}>Go back</button>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
