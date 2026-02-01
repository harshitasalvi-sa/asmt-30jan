import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import { useDebounce } from "../hooks/useDebounce";
import { clearSearch, fetchMovies } from "../store/slices/moviesSlice";
import { setSearchTerm } from "../store/slices/filtersSlice";

const SearchBar = () => {
  const {searchTerm,type, year, page} = useSelector(state=> state.filters);
  //const debounce = useDebounce(searchMovies);
  const dispatch = useDispatch();

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(fetchMovies({ 
        searchTerm: debouncedSearchTerm,
        page: 1,
        type: type,
        year: year
      }));
    }
  }, [debouncedSearchTerm, dispatch]);

  const handleSearch = (e) =>{
    const value = e.target.value;
    dispatch(setSearchTerm(value));
    //debouncedSearch(value);
  }
  return (
    <div>
      <input 
      type="text"
      value={searchTerm}
      onChange={handleSearch}
      />

      <button onClick={()=>dispatch(clearSearch())}>Clear Search</button>
    </div>
  )
}

export default SearchBar