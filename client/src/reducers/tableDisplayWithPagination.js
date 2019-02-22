import { LOAD_TABLE_PAGINATION_BAR, 
        HANDLE_PAGINATION_PAGE_BUTTON_CLICK, 
        HANDLE_PAGINATION_PREV_BUTTON_CLICK,
        HANDLE_PAGINATION_NEXT_BUTTON_CLICK } from "../actions/actions"; 

const intialState = {
  isLoaded:false
}        
const  tableDisplayWithPagination = (state = intialState, action) => {

    switch (action.type) {
      case LOAD_TABLE_PAGINATION_BAR:
        return action.payload
      case HANDLE_PAGINATION_PAGE_BUTTON_CLICK:
        return Object.assign({}, state, {currentPage: action.payload});
      case HANDLE_PAGINATION_PREV_BUTTON_CLICK:
           {
              const { currentPage } = state;
              const newCurrentPage = (currentPage !== 1)? currentPage - 1 : currentPage;   
              return Object.assign({}, state, {currentPage: newCurrentPage});  
           }
      case HANDLE_PAGINATION_NEXT_BUTTON_CLICK:
           {
             const { currentPage } = state;
             const numberOfPages = action.payload;
             const newCurrentPage = (currentPage < numberOfPages)? currentPage + 1 :currentPage;
             return Object.assign({}, state, {currentPage: newCurrentPage});
           }
      default:
        return state
    }
  }
  
export default tableDisplayWithPagination;

