// src/redux/reducers/moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchMoviesStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchMoviesSuccess(state, action) {
            state.loading = false;
            state.items = action.payload;
        },
        fetchMoviesError(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

// Експортуйте дії та редюсер
export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesError } = moviesSlice.actions;
export default moviesSlice.reducer;
