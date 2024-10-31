// src/redux/reducers/moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        items: [], // Початковий стан - масив
        loading: false,
        error: null,
    },
    reducers: {
        fetchMoviesStart(state) {
            state.loading = true;
            state.error = null; // Очищення помилки при новому запиті
        },
        fetchMoviesSuccess(state, action) {
            state.loading = false;
            state.items = action.payload; // Встановлення отриманих фільмів
        },
        fetchMoviesError(state, action) {
            state.loading = false;
            state.error = action.payload; // Встановлення повідомлення про помилку
        },
    },
});

// Експортуємо дії та редюсер
export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesError } = moviesSlice.actions;
export default moviesSlice.reducer;
