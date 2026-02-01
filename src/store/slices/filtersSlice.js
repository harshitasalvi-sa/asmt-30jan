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
      //console.log(state.searchTerm);
    },
    setType: (state, action) => {
      // TODO: Update type filter
    },
    setYear: (state, action) => {
      // TODO: Update year filter
    },
    clearFilters: (state) => {
      // TODO: Reset all filters
    },
  },
});

export const { setSearchTerm, setType, setYear, clearFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;