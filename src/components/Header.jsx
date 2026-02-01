import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';

export default function Header() {
  // TODO: Implement header with nav links and search
  return <>
  <div className="bar">
    <SearchBar/> <FilterBar/>
  </div>
  </>
}