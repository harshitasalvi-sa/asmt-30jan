
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWatchlist } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const WatchList = () => {
    const { watchlist } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <>
  <h2>Watch List</h2>
    <div className='movie-grid'>
        {watchlist && watchlist.length > 0 
         ? watchlist.map((movie, index)=>{
            return <div 
                    key={movie.imdbID || index}
                    onClick={()=>navigate(`/movie/${movie.imdbID}`)} 
                    className="movie-card" style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", width: "200px" }}>
                    <img 
                      src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"} 
                      alt={movie.Title || "Movie poster"} 
                      id="poster"
                      style={{ width: "100%", height: "250px", objectFit: "cover" }}
                    />
                    <div className="mvi-details">
                        <strong>{movie.Title}</strong>
                        <p>{movie.Year} • {movie.Type}</p>
                        
                            <button id="remove-fav" 
                              onClick={(e) => 
                                {e.stopPropagation(); 
                                dispatch(removeFromWatchlist(movie))}}>
                                Remove
                            </button>
                        
                    </div>
                </div>
            
         }) 
        :
        <p>No movie in your watchlist</p>
    }

    </div>
    </>
  )
}

export default WatchList;