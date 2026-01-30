
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../store/slices/userSlice";
import MovieCard from "../components/MovieCard";

const Favouristes = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.user.favorites);

  const handleRemoveFromFavorites = (imdbID) => {
    dispatch(removeFromFavorites(imdbID));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>Your favorites list is empty.</p>
      ) : (
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", 
          gap: "20px" 
        }}>
          {favorites.map((movie) => (
            <div key={movie.imdbID} style={{ position: "relative" }}>
              <MovieCard movie={movie} />
              <button 
                onClick={() => handleRemoveFromFavorites(movie.imdbID)}
                style={{ 
                  position: "absolute", 
                  top: "10px", 
                  right: "10px", 
                  background: "red", 
                  color: "white", 
                  border: "none", 
                  borderRadius: "50%", 
                  width: "30px", 
                  height: "30px" 
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favouristes;