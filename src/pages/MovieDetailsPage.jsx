import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  useEffect(() => {
    
  }, [movieId]);

  const goBack = () => {
    window.history.back(); 
  };

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      {/* Відображення деталей фільму */}
    </div>
  );
};

export default MovieDetailsPage;
