
// TODO: Implement movie card with poster, title, year, buttons

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToWatchlist, toggleFavorite } from "../store/slices/userSlice";

const MovieCard = ({ movie }) => {
  if (!movie) return null;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <div onClick={()=>navigate(`/movie/${movie.imdbID}`)} className="movie-card" >
        <img 
          src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.net/default.png"} 
          alt={movie.Title || "Movie poster"} 
          id="poster"
        />
        <div className="mvi-details">
            <strong>{movie.Title}</strong>
            <p>{movie.Year} • {movie.Type}</p>
            <div className="btns">
                <button onClick={(e) => {e.stopPropagation(); dispatch(toggleFavorite(movie))}}>❤️</button>
                <button onClick={(e) => {e.stopPropagation(); dispatch(addToWatchlist(movie))}}>➕</button>
            </div>
        </div>
    </div>
  )
}

export default MovieCard