
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import LoadingSkeleton from "./LoadingSkeleton"

const MovieGrid = () => {
  const {searchResults, loading, error} = useSelector(state => state.movies);
  
  const { watchlist, favorites } = useSelector(state => state.user);
  const location = useLocation();

  const getMoviesToDisplay = () => {
    switch (location.pathname) {
      case '/favorites':
        return {
          movies: favorites,
          title: 'Your Favorite Movies',
          emptyMessage: 'No favorite movies yet. Add some movies to your favorites!'
        };
      case '/watchlist':
        return {
          movies: watchlist,
          title: 'Your Watchlist',
          emptyMessage: 'No movies in your watchlist yet. Add some movies to watch later!'
        };
      default:
        return {
          movies: searchResults,
          title: 'Search Results',
          emptyMessage: 'No search results found. Try searching for a movie!'
        };
    }
  };

  const { movies, title, emptyMessage } = getMoviesToDisplay();

  return (
    <div className='movies'>
      <h2>{title}</h2>
      
      {/* {loading && <p>Loading...</p>} */}
      {loading ?  
      <LoadingSkeleton count={8}/> 
      : 
      movies && movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map((movie, index) => {
            return <MovieCard key={movie.imdbID || index} movie={movie}/>}
          )}
        </div>
      ) : (
        !loading && <p className="empty-message">{emptyMessage}</p>
      )
      }
      {/* {error && <p style={{color:"red"}}>Error: {error}</p>}
      
      {movies && movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map((movie, index) => {
            return <MovieCard key={movie.imdbID || index} movie={movie}/>}
          )}
        </div>
      ) : (
        !loading && <p className="empty-message">{emptyMessage}</p>
      )} */}

      <Pagination/>
    </div>

    // <div className='movie-grid'>
    //   {loading && <p>Loading...</p>}
    //   {error && <p style={{color:"red"}}>Error loading results</p>}
    //   {
    //     searchResults && searchResults.length > 0
    //      ?
    //      searchResults.map((item, index) => {
          
    //         return <MovieCard key={item.imdbID || index} movie={item}/>
          
    //      })
    //      :
    //      <p>No search results found</p>
    //   }
    // </div>
  )
}

export default MovieGrid