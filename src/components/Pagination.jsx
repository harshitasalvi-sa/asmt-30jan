import { useDispatch, useSelector } from "react-redux"
import { setCurrentPage , fetchMovies} from "../store/slices/moviesSlice";

const Pagination = () => {
    const {currentPage, totalResults} = useSelector(state => state.movies);
    const { searchTerm, type, year } = useSelector(state => state.filters);
    const dispatch = useDispatch();

    const totalPages = Math.ceil(totalResults / 10);

    if (!totalResults || totalPages <= 1) return null;
  
  const goToPrevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      dispatch(setCurrentPage(newPage));
      dispatch(fetchMovies({ searchTerm, page: newPage, type, year }));
    }
  };
  
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      dispatch(setCurrentPage(newPage));
      dispatch(fetchMovies({ searchTerm, page: newPage, type, year }));
    }
  };

  return (
    <div className="pagination" style={{ textAlign: 'center', margin: '20px 0' }}>
      <button 
        onClick={goToPrevPage} 
        disabled={currentPage === 1}
        style={{ margin: '0 10px', padding: '8px 16px' }}
      >
        Prev
      </button>
      
      <span style={{ margin: '0 15px' }}>
        Page {currentPage} of {totalPages}
      </span>
      
      <button 
        onClick={goToNextPage} 
        disabled={currentPage === totalPages}
        style={{ margin: '0 10px', padding: '8px 16px' }}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination