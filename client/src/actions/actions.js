import axios from "axios";

export const TOGGLE_SIDE_BAR = "TOGGLE_SIDE_BAR";
export const HANDLE_STATS_CARDS_URL_FETCH = "HANDLE_STATS_CARDS_URL_FETCH";
export const HANDLE_STATS_CARDS_URL_ERROR = "HANDLE_STATS_CARDS_URL_ERROR";
export const LOAD_STATS_CARDS = "LOAD_STATS_CARDS";

export const LOAD_TABLE_PAGINATION_BAR = "LOAD_TABLE_PAGINATION_BAR";
export const HANDLE_PAGINATION_PAGE_BUTTON_CLICK = "HANDLE_PAGINATION_PAGE_BUTTON_CLICK";
export const HANDLE_PAGINATION_PREV_BUTTON_CLICK = "HANDLE_PAGINATION_PREV_BUTTON_CLICK";
export const HANDLE_PAGINATION_NEXT_BUTTON_CLICK = "HANDLE_PAGINATION_NEXT_BUTTON_CLICK";
export const HANDLE_CAMPAIGN_URL_ERROR = "HANDLE_CAMPAIGN_URL_ERROR";
export const HANDLE_CAMPAIGN_URL_FETCH = "HANDLE_CAMPAIGN_URL_FETCH";

/**
 * Side bar - action
 */
export const toggle_side_bar = (visibility) => {
  return {
    type: TOGGLE_SIDE_BAR,
    payload: visibility
  };
};

/**
 * Stats card - actions 
 */
export const get_stats_cards_data = () => dispatch =>{
  const getUrl = "http://localhost:8080/aggregates";
  axios.get(getUrl)
       .then(res => {
         dispatch(load_stats_cards_data(res.data));
         dispatch(fetched_stats_cards_data())
       })
       .catch(err => {
          dispatch(error_stats_cards_url(err));
          dispatch(fetched_stats_cards_data());
       });

}

export const fetched_stats_cards_data = () =>{
  return{
    type:HANDLE_STATS_CARDS_URL_FETCH,
    payload: true
  }
}

export const error_stats_cards_url = () => {
  return{
    type:HANDLE_STATS_CARDS_URL_ERROR,
    payload:"ERROR_CONNECTION_FAILED"
  }
}

export const load_stats_cards_data = (data) => {
  return {
    type: LOAD_STATS_CARDS,
    payload: {
     stats: data,
     isLoaded:true,
     isUpdated: new Date()
   }
  }
}


/**
 * Table & pagination - actions for rendering campagin details table
 */
export const get_campaign_data = () => dispatch =>{
   const getUrl = "http://localhost:8080/campaigns";
   axios.get(getUrl)
        .then(res => {
           dispatch(load_table_pagination_bar(res.data));
           dispatch(fetched_campaign_data())
        })
        .catch(err => {
          dispatch(error_campaign_url(err));
          dispatch(fetched_campaign_data());
        });
}

export const fetched_campaign_data = () =>{
  return{
    type:HANDLE_CAMPAIGN_URL_FETCH,
    payload: true
  }
}

export const error_campaign_url = () => {
  return{
    type:HANDLE_CAMPAIGN_URL_ERROR,
    payload:"ERROR_CONNECTION_FAILED"
  }
}

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

export const handle_pagination_page_button_click = (id) => {
   return{
     type: HANDLE_PAGINATION_PAGE_BUTTON_CLICK,
     payload: id
   }
 }   
 
 export const  handle_pagination_prev_button_click = () => {
   return{
     type: HANDLE_PAGINATION_PREV_BUTTON_CLICK
   }
 }

 export const  handle_pagination_next_button_click = (numberOfPages) => {
  return{
    type: HANDLE_PAGINATION_NEXT_BUTTON_CLICK,
    payload:  numberOfPages
  }
}