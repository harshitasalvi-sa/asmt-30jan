import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    searchTerm: "",
    type: "all",
    year: "all",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      // TODO: Update search term
      state.searchTerm = action.payload;
    },
    setType: (state, action) => {
      // TODO: Update type filter
      state.type = action.payload;
    },
    setYear: (state, action) => {
      // TODO: Update year filter
      state.year = action.payload
    },
    clearFilters: (state) => {
      // TODO: Reset all filters
      searchTerm = "";
      type = "all";
      year = "all";
    },
  },
});

export const { setSearchTerm, setType, setYear, clearFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
