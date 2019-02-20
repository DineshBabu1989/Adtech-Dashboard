import axios from "axios";

export const TOGGLE_SIDE_BAR = "TOGGLE_SIDE_BAR";
export const LOAD_TABLE_PAGINATION_BAR = "LOAD_TABLE_PAGINATION_BAR";
export const HANDLE_PAGINATION_PAGE_BUTTON_CLICK = "HANDLE_PAGINATION_PAGE_BUTTON_CLICK";
export const HANDLE_PAGINATION_PREV_BUTTON_CLICK = "HANDLE_PAGINATION_PREV_BUTTON_CLICK";
export const HANDLE_PAGINATION_NEXT_BUTTON_CLICK = "HANDLE_PAGINATION_NEXT_BUTTON_CLICK";
export const HANDLE_CAMPAIGN_URL_ERROR = "HANDLE_CAMPAIGN_URL_ERROR";
export const HANDLE_CAMPAIGN_URL_FETCH = "HANDLE_CAMPAIGN_URL_FETCH";

/**
 * Triggers an action to show or hide sidebar
 * @param {*} visiblity Boolean value returning either true or false from reducer
 * @return A boolean whose value is either true or false
 */
export const toggle_side_bar = (visibility) => {
  return {
    type: TOGGLE_SIDE_BAR,
    payload: visibility
  };
};

/**
 * Error handling on network request failure
 */
export const error_campaign_url = () => {
  console.log("error reducer called");
  return{
    type:HANDLE_CAMPAIGN_URL_ERROR,
    payload:"ERROR_CONNECTION_FAILED"
  }
}

/**
 * Makes API call to get campaign details and dispatches actions
 */
export const get_campaign_data = () => dispatch =>{
   const getUrl = "http://localhost:8080/campaigns";
   axios.get(getUrl)
        .then(res => {
           dispatch(load_table_pagination_bar(res.data));
           dispatch(fetching_campaign_data())
        })
        .catch(err => {
          dispatch(error_campaign_url(err));
          dispatch(fetching_campaign_data());
        });
}

/**
 * Fetching of campaign data complete
 */
export const fetching_campaign_data = () =>{
  return{
    type:HANDLE_CAMPAIGN_URL_FETCH,
    payload: true
  }
}

/**
 *  Load table and pagination scroll bar when called with a data array 
 *  @return Object with table data, current page number, number of rows needed in a table, table name 
 */
export const load_table_pagination_bar = (data) => {
  return {
    type: LOAD_TABLE_PAGINATION_BAR,
    payload: {
     tableContentArray : data,
     currentPage: 1,
     rowsPerPage: 10,
     tableName:"Campaigns Breakdown",
     isLoaded:true
   }
  }
}

/**
 * Takes in a page id and and renderes a new table with a data between 2 indexes
 * from a data store
 * @param {id} id Page id that is clicked by the user
 */
export const handle_pagination_page_button_click = (id) => {
   return{
     type: HANDLE_PAGINATION_PAGE_BUTTON_CLICK,
     payload: id
   }
 }   
 
 /**
  * Decrements the page count and renders a new table 
  */
 export const  handle_pagination_prev_button_click = () => {
   return{
     type: HANDLE_PAGINATION_PREV_BUTTON_CLICK
   }
 }

 /**
  * Increments the page count and renders a new table
  */
 export const  handle_pagination_next_button_click = (numberOfPages) => {
  return{
    type: HANDLE_PAGINATION_NEXT_BUTTON_CLICK,
    payload:  numberOfPages
  }
}