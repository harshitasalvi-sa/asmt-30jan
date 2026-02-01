import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import "./Header.css"
import { useSelector } from 'react-redux';
export default function Header() {
  // TODO: Implement header with nav links and search
  const { watchlist, favorites } = useSelector(state => state.user);
  
  const totalWatchlistItems = watchlist ? watchlist.length : 0;
  const totalFavoriteItems = favorites ? favorites.length : 0; 


  return <>
  <div className="bar">
    <nav>
      <Link to="/"><h4>Movie List App</h4></Link>
      <div className="nav-list">
        <Link to="/favorites">
          <button className='lists'>❤️ {totalFavoriteItems}</button>
        </Link>
         <Link to="/watchlist"> 
          <button className='lists'>🎥 {totalWatchlistItems}</button>
         </Link>
      </div>
    </nav>
    <div className="search-bar">
    <SearchBar/>
     <FilterBar/>
    </div> 
  </div>
  </>
}