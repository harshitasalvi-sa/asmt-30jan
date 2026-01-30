import  { useState,useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

const SearchBar = ({ onSearch = () => {} }) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  // Trigger search when debounced query changes
  useEffect(() => {
    if (debouncedQuery && debouncedQuery.trim().length > 0) {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery]); // Removed onSearch from dependencies

  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      style={{ padding: "10px", width: "100%", marginBottom: "20px" }}
    />
  );
};

export default SearchBar;