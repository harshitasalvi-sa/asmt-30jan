import {useState, useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchMovieDetails } from '../store/slices/moviesSlice';

const MovieDetails = () => {

    const {imdbID} = useParams();
    const dispatch = useDispatch();
    const {movieDetails, loading , error} = useSelector(state=> state.movies)

    const movie = movieDetails[imdbID];

    useEffect(() => {
        if (!movie) {
            dispatch(fetchMovieDetails(imdbID));
        }
    }, [imdbID, movie, dispatch]);

  return (
    <>
    {loading && <p>Loading...</p>}
    {error && <p>Error loading result</p>}
    {movie && 
    <div className='movie-details-page'>
        <img src={movie.Poster} alt={movie.Title || "Poster"} />
        <div className="text">
          <h1>{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Rating:</strong> {movie.imdbRating}/10</p>
        </div>
    </div>}

    </>
  )
}

export default MovieDetails