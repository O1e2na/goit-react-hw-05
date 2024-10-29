import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <Router>
      <Navigation darkTheme={darkTheme} />
      <button onClick={toggleTheme}>
        {darkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
      <Routes>
        <Route path="/" element={<HomePage darkTheme={darkTheme} />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
