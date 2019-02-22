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
export const toggleSideBar = (visibility) => {
  return {
    type: TOGGLE_SIDE_BAR,
    payload: visibility
  };
};

/**
 * Stats card - actions 
 */
export const getStatsCardsData = () => dispatch =>{
  const getUrl = "http://localhost:8080/aggregates";
  axios.get(getUrl)
       .then(res => {
         dispatch(loadStatsCardsData(res.data));
         dispatch(fetchedStatsCardsData())
       })
       .catch(err => {
          dispatch(errorStatsCardsUrl(err));
          dispatch(fetchedStatsCardsData());
       });

}

export const fetchedStatsCardsData = () =>{
  return{
    type:HANDLE_STATS_CARDS_URL_FETCH,
    payload: true
  }
}

export const errorStatsCardsUrl = () => {
  return{
    type:HANDLE_STATS_CARDS_URL_ERROR,
    payload:"ERROR_CONNECTION_FAILED"
  }
}

export const loadStatsCardsData = (data) => {
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
export const getCampaignData = () => dispatch =>{
   const getUrl = "http://localhost:8080/campaigns";
   axios.get(getUrl)
        .then(res => {
           dispatch(loadTablePaginationBar(res.data));
           dispatch(fetchedCampaignData())
        })
        .catch(err => {
          dispatch(errorCampaignUrl(err));
          dispatch(fetchedCampaignData());
        });
}

export const fetchedCampaignData = () =>{
  return{
    type:HANDLE_CAMPAIGN_URL_FETCH,
    payload: true
  }
}

export const errorCampaignUrl = () => {
  return{
    type:HANDLE_CAMPAIGN_URL_ERROR,
    payload:"ERROR_CONNECTION_FAILED"
  }
}

export const loadTablePaginationBar = (data) => {
  return {
    type: LOAD_TABLE_PAGINATION_BAR,
    payload: {
     tableContentArray : data,
     currentPage: 1,
     rowsPerPage: 8,
     tableName:"Campaigns Breakdown",
     isLoaded:true
   }
  }
}

export const handlePaginationPageButtonClick = (id) => {
   return{
     type: HANDLE_PAGINATION_PAGE_BUTTON_CLICK,
     payload: id
   }
 }   
 
 export const  handlePaginationPrevButtonClick = () => {
   return{
     type: HANDLE_PAGINATION_PREV_BUTTON_CLICK
   }
 }

 export const  handlePaginationNextButtonClick = (numberOfPages) => {
  return{
    type: HANDLE_PAGINATION_NEXT_BUTTON_CLICK,
    payload:  numberOfPages
  }
}