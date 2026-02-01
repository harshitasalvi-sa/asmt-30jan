import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchMovies, getMovieDetails } from "../../services/api";

// TODO: Create async thunk for fetching movies
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ searchTerm, page, type, year }) => {
    // TODO: Call searchMovies API
    const data = await searchMovies(searchTerm, page, type, year);
    return data;
  },
);

// TODO: Create async thunk for fetching movie details
export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (imdbID) => {
    // TODO: Call getMovieDetails API
    const data = await getMovieDetails(imdbID);
    return data;
  },
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    searchResults: [],
    movieDetails: {},
    loading: false,
    error: null,
    totalResults: 0,
    currentPage: 1,
  },
  reducers: {
    clearSearch: (state) => {
      // TODO: Clear search results
      state.searchResults = [];
      state.totalResults = 0;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      // TODO: Update current page

    },
  },
  extraReducers: (builder) => {
    // TODO: Handle fetchMovies pending/fulfilled/rejected
    builder
    .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload.Search || [];
        state.totalResults = parseInt(action.payload.totalResults) || 0;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.movieDetails[action.payload.imdbID] = action.payload;
      });
    // TODO: Handle fetchMovieDetails pending/fulfilled/rejected
  },
});

export const { clearSearch, setCurrentPage } = moviesSlice.actions;
export default moviesSlice.reducer;