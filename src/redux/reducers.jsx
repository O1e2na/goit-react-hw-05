// src/redux/reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './moviesReducer'; 

const rootReducer = combineReducers({
  movies: moviesReducer,
  // тут можна додати інші редюсери
});

export default rootReducer;
