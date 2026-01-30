
// TODO: Implement responsive grid layout
import MovieCard from "./MovieCard";

const MovieGrid = ({ movies = [], onAddToWatchlist, onAddToFavorites }) => {
  if (!movies || movies.length === 0) {
    return <p>No movies found. Try searching for a movie!</p>;
  }

  return (
    <div className="movie-grid" style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", 
      gap: "20px", 
      padding: "20px" 
    }}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onAddToWatchlist={onAddToWatchlist}
          onAddToFavorites={onAddToFavorites}
        />
      ))}
    </div>
  )
}

export default MovieGrid