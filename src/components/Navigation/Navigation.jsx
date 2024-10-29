import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/movies">Movies</NavLink>
  </nav>
);

export default Navigation;
