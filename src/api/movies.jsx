// src/api/movies.jsx
export const fetchTrendingMovies = async () => {
  const response = await fetch('YOUR_API_URL'); // Введіть ваш API URL
  if (!response.ok) {
    throw new Error('Failed to fetch trending movies');
  }
  return response.json(); // або response.data, залежно від вашого API
};
