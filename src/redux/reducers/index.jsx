// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import yourSlice from './yourSlice'; // замініть на ваші слайси

const rootReducer = combineReducers({
    yourSlice, // ваш редюсер
    // додайте інші редюсери, якщо є
});

export default rootReducer;
