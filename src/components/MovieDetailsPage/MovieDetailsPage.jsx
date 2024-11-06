import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, Link, Routes, Route } from 'react-router-dom';
import { fetchMovieDetails } from '../api/movies';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const previousLocation = useRef(location.state?.from || '/');

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieData = await fetchMovieDetails(movieId);
      setMovie(movieData);
    };

    getMovieDetails();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <Link to={previousLocation.current}>Go back</Link>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <ul>
        <li><Link to="cast">Cast</Link></li>
        <li><Link to="reviews">Reviews</Link></li>
      </ul>

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
