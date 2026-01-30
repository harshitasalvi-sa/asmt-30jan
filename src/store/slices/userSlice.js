import { createSlice } from "@reduxjs/toolkit";
import { loadFromStorage, saveToStorage } from "../../services/localstorage";

const userSlice = createSlice({
  name: "user",
  initialState: {
    watchlist: loadFromStorage("watchlist", []),
    favorites: loadFromStorage("favorites", []),
  },
  reducers: {
    addToWatchlist: (state, action) => {
      const movie = action.payload;
      const exists = state.watchlist.find(m => m.imdbID === movie.imdbID);
      if (!exists) {
        state.watchlist.push(movie);
        saveToStorage("watchlist", state.watchlist);
      }
    },
    removeFromWatchlist: (state, action) => {
      const imdbID = action.payload;
      state.watchlist = state.watchlist.filter(movie => movie.imdbID !== imdbID);
      saveToStorage("watchlist", state.watchlist);
    },
    addToFavorites: (state, action) => {
      const movie = action.payload;
      const exists = state.favorites.find(m => m.imdbID === movie.imdbID);
      if (!exists) {
        state.favorites.push(movie);
        saveToStorage("favorites", state.favorites);
      }
    },
    removeFromFavorites: (state, action) => {
      const imdbID = action.payload;
      state.favorites = state.favorites.filter(movie => movie.imdbID !== imdbID);
      saveToStorage("favorites", state.favorites);
    },
    toggleFavorite: (state, action) => {
      const movie = action.payload;
      const exists = state.favorites.find(m => m.imdbID === movie.imdbID);
      if (exists) {
        state.favorites = state.favorites.filter(m => m.imdbID !== movie.imdbID);
      } else {
        state.favorites.push(movie);
      }
      saveToStorage("favorites", state.favorites);
    },
  },
});

export const { addToWatchlist, removeFromWatchlist, addToFavorites, removeFromFavorites, toggleFavorite } =
  userSlice.actions;
export default userSlice.reducer;
