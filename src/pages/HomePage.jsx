import PropTypes from 'prop-types';

const HomePage = ({ darkTheme }) => {
  return (
    <div style={{ backgroundColor: darkTheme ? '#222' : '#f4f4f4', color: darkTheme ? '#fff' : '#000' }}>
      <h1>Home Page</h1>
      {/* Additional homepage content */}
    </div>
  );
};

HomePage.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
};

export default HomePage;