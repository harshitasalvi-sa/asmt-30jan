
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

export default function Header({ onSearch, type, year, onTypeChange, onYearChange, onClearFilters }) {
  // const handleSearch = (query) => {
  //   console.log("Search query:", query); // Replace with actual search logic
  //   onSearch(query);
  // };
  return (
    <header style={{ padding: "10px", backgroundColor: "#141414", color: "#fff" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Movie List App</h1>
        <div style={{ display: "flex", gap: "15px" }}>
          <Link to="/favorites" style={{ color: "#fff", textDecoration: "none" }}>Favorites</Link>
          <Link to="/watchlist" style={{ color: "#fff", textDecoration: "none" }}>Watchlist</Link>
        </div>
      </nav>
      <SearchBar onSearch={onSearch} />
      <FilterBar
        type={type}
        year={year}
        onTypeChange={onTypeChange}
        onYearChange={onYearChange}
        onClearFilters={onClearFilters}
      />
    </header>
  );
}