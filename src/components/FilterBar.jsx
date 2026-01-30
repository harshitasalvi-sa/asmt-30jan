
const FilterBar = ({ type, year, onTypeChange, onYearChange, onClearFilters }) => {
  const years = ["all", ...Array.from({ length: 35 }, (_, i) => (2024 - i).toString())];
  const types = ["all", "movie", "series", "episode"];

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <select value={type} onChange={(e) => onTypeChange(e.target.value)}>
        {types.map((t) => (
          <option key={t} value={t}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </option>
        ))}
      </select>
      <select value={year} onChange={(e) => onYearChange(e.target.value)}>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
      <button onClick={onClearFilters}>Clear Filters</button>
    </div>
  );
};

export default FilterBar;