import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { searchMovies } from './services/api';

import SearchResults from "./pages/SearchResults.jsx"
import MovieGrid from './components/MovieGrid';

// Import pages
import Header from './components/Header';
import Home from './pages/Home';
// TODO: Import other pages

import './App.css';
import MovieDetails from './pages/MovieDetails.jsx';
import WatchList from './pages/WatchList.jsx';
import Favouristes from './pages/Favouristes.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = useCallback(async (query) => {
    if (!query || query.trim().length === 0) {
      setMovies([]);
      setError(null);
      return;
    }
    
    setLoading(true);
    setError(null);
    try {
      const data = await searchMovies(query);
      setMovies(data.Search || []);
    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const addToWatchlist = (movie) => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const exists = watchlist.find(m => m.imdbID === movie.imdbID);
    if (!exists) {
      watchlist.push(movie);
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
      alert("Added to watchlist!");
    } else {
      alert("Already in watchlist!");
    }
  };

  const addToFavorites = (movie) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favorites.find(m => m.imdbID === movie.imdbID);
    if (!exists) {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Added to favorites!");
    } else {
      alert("Already in favorites!");
    }
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Header onSearch={handleSearch} />
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          <MovieGrid 
            movies={movies} 
            onAddToWatchlist={addToWatchlist}
            onAddToFavorites={addToFavorites}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* TODO: Add other routes */}
            <Route path="/search" element={<SearchResults/>} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/favorites" element={<Favouristes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;