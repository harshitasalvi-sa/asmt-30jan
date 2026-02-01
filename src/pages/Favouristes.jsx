import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/slices/userSlice';

const Favouristes = () => {
    const { favorites } = useSelector(state => state.user);
    const dispatch = useDispatch();

  return (
    <>
  <h2>Favroites</h2>
    <div className='movie-grid'>
        

        {favorites && favorites.length > 0 
         ? favorites.map((movie, index)=>{
            return <div onClick={()=>navigate(`/movie/${movie.imdbID}`)} className="movie-card" style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", width: "200px" }}>
                    <img 
                      src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"} 
                      alt={movie.Title || "Movie poster"} 
                      id="poster"
                      style={{ width: "100%", height: "250px", objectFit: "cover" }}
                    />
                    <div className="mvi-details">
                        <strong>{movie.Title}</strong>
                        <p>{movie.Year} • {movie.Type}</p>
                        
                            <button id="remove-fav" onClick={(e) => {e.stopPropagation(); dispatch(toggleFavorite(movie))}}>Remove</button>
                        
                    </div>
                </div>
            
         }) 
        :
        <p>No movie in your favroites</p>
    }

    </div>
    </>
  )
}

export default Favouristes