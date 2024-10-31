// src/redux/moviesReducer.js
const initialState = {
  trendingMovies: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TRENDING_MOVIES':
      return {
        ...state,
        trendingMovies: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
