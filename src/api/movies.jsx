// src/api/movies.jsx

export const fetchMoviesByQuery = async (query) => {
  try {
    const response = await fetch(`https://api.example.com/movies?query=${query}`);
    if (!response.ok) throw new Error('Failed to fetch movies by query');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
