import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../services/api";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(imdbID);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (imdbID) {
      fetchMovieDetails();
    }
  }, [imdbID]);

  if (loading) return <div style={{ padding: "20px" }}>Loading...</div>;
  if (error) return <div style={{ padding: "20px", color: "red" }}>Error: {error}</div>;
  if (!movie) return <div style={{ padding: "20px" }}>Movie not found</div>;

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "20px" }}>
        Back
      </button>

      <div style={{ display: "flex", gap: "20px" }}>
        <img 
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"} 
          alt={movie.Title}
          style={{ width: "200px", height: "300px", objectFit: "cover" }}
        />
        
        <div className="mvi-detail-details">
          <h1>{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Rating:</strong> {movie.imdbRating}/10</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;