import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';

const MovieGrid = () => {
  const {searchResults, loading, error} = useSelector(state => state.movies);
  console.log(searchResults);
  return (
    <div className='movie-grid'>
      {loading && <p>Loading...</p>}
      {error && <p style={{color:"red"}}>Error loading results</p>}
      {
        searchResults && searchResults.length > 0
         ?
         searchResults.map((item, index) => {
          
            return <MovieCard key={item.imdbID || index} movie={item}/>
          
         })
         :
         <p>No search results found</p>
      }
    </div>
  )
}

export default MovieGrid