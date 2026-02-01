import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setType, setYear } from '../store/slices/filtersSlice';

const FilterBar = () => {
  const {type, year} = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const years = ["all", ...Array.from({ length: 35 }, (_, i) => (2024 - i).toString())];
  return (
    <div className='filter-bar'>
      <label htmlFor="type" >Type : </label>
      <select name="type" id="type" value={type} onChange={(e)=>dispatch(setType(e.target.value))}>
        <option value="all">All</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
        <option value="movie">Movie</option>
      </select>
      <select value={year} onChange={(e) => dispatch(setYear(e.target.value))}>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterBar