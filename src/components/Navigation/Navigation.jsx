import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navigation = ({ darkTheme }) => {
  return (
    <nav style={{ backgroundColor: darkTheme ? '#333' : '#fff', color: darkTheme ? '#fff' : '#000' }}>
      <NavLink to="/" style={{ color: darkTheme ? '#fff' : '#000', marginRight: '15px' }}>Home</NavLink>
      <NavLink to="/movies" style={{ color: darkTheme ? '#fff' : '#000' }}>Movies</NavLink>
    </nav>
  );
};

Navigation.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
};

export default Navigation;


