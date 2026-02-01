import { API_BASE_URL, API_KEY } from "../utils/constants";

/**
 * Search movies by title
 * @param {string} searchTerm - Movie title to search
 * @param {number} page - Page number (default: 1)
 * @param {string} type - Movie type filter (default: '')
 * @param {string} year - Year filter (default: '')
 * @returns {Promise<Object>} Search results
 */
export const searchMovies = async (
  searchTerm,
  page = 1,
  type = "",
  year = "",
) => {
  // TODO: Implement API call
  // Build URL with query parameters

  const params = new URLSearchParams({
    apikey: API_KEY,
    s: searchTerm,
    page: page.toString(),
    ...(type && type !== "all" && { type }),
    ...(year && year !== "all" && { y: year }),
  });

  const response = await fetch(`${API_BASE_URL}?${params}`);
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data;

  // const response = await axios.get(`${API_BASE_URL}/?apikey=${API_KEY}&s=${searchTerm}&page=${page}&type=${type}&y=${year}`);

  // const data = await response.json();
  // console.log(data);
  // return data;
  // Handle response
  // Throw error if Response is "False"
  throw new Error("searchMovies not implemented");
};

/**
 * Get movie details by IMDb ID
 * @param {string} imdbID - IMDb ID of the movie
 * @returns {Promise<Object>} Movie details
 */
export const getMovieDetails = async (imdbID) => {
  // TODO: Implement API call
  // Fetch movie by ID with plot=full
  
  const response = await fetch(
    `${API_BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`,
  );
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data;

  // const response = await axios.get(`${API_BASE_URL}/?apikey=${API_KEY}&i=${imdbID}&plot=full`);

  // const data = await response.json();
  // console.log(data);
  // return data;
  // Handle response
  // Throw error if Response is "False"
  throw new Error("getMovieDetails not implemented");
};