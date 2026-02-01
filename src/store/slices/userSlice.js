import { createSlice } from "@reduxjs/toolkit";
import { loadFromStorage, saveToStorage } from "../../services/localStorage";

const userSlice = createSlice({
  name: "user",
  initialState: {
    watchlist: loadFromStorage("watchlist", []),
    favorites: loadFromStorage("favorites", []),
  },
  reducers: {
    addToWatchlist: (state, action) => {
      // TODO: Add movie ID to watchlist
      const movie = action.payload;

      const isAlreadyInWatchlist = state.watchlist.find(m => m.imdbID === movie.imdbID);

      if (!isAlreadyInWatchlist) {
        state.watchlist.push(movie);
        saveToStorage("watchlist", state.watchlist);
      }
      // Save to localStorage
    },
    removeFromWatchlist: (state, action) => {
      // TODO: Remove movie ID from watchlist
      const movieId = action.payload.imdbID;
      state.watchlist = state.watchlist.filter(m => m.imdbID !== movieId);
      saveToStorage("watchlist", state.watchlist);
      // Save to localStorage
    },
    toggleFavorite: (state, action) => {
      // TODO: Toggle favorite status
      const movie = action.payload;
      const movieId = movie.imdbID;
      
      if(state.favorites.find(m => m.imdbID === movieId)){
        state.favorites = state.favorites.filter(m => m.imdbID !== movieId);
      }
      else{
        state.favorites.push(movie);   
      }
      saveToStorage("favorites", state.favorites);
      // Save to localStorage
    },
  },
});

export const { addToWatchlist, removeFromWatchlist, toggleFavorite } =
  userSlice.actions;
export default userSlice.reducer;