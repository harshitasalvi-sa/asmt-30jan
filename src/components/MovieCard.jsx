
// TODO: Implement movie card with poster, title, year, buttons

import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, onAddToWatchlist, onAddToFavorites }) => {
  if (!movie) return null;

  const navigate = useNavigate();
  
  return (
    <div onClick={()=>navigate(`/movie/${movie.imdbID}`)} className="movie-card" style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", width: "200px" }}>
        <img 
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"} 
          alt={movie.Title || "Movie poster"} 
          id="poster"
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
        />
        <div className="mvi-details">
            <strong>{movie.Title}</strong>
            <p>{movie.Year} • {movie.Type}</p>
            <div className="btns">
                <button onClick={(e) => {e.stopPropagation(); onAddToFavorites(movie)}}>❤️</button>
                <button onClick={(e) => {e.stopPropagation(); onAddToWatchlist(movie)}}>➕</button>
            </div>
        </div>
    </div>
  )
}

export default MovieCard