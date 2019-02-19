export const TOGGLE_SIDE_BAR = "TOGGLE_SIDE_BAR";

export const LOAD_TABLE_PAGINATION_BAR = "LOAD_TABLE_PAGINATION_BAR";
export const HANDLE_PAGINATION_PAGE_BUTTON_CLICK = "HANDLE_PAGINATION_PAGE_BUTTON_CLICK";
export const HANDLE_PAGINATION_PREV_BUTTON_CLICK = "HANDLE_PAGINATION_PREV_BUTTON_CLICK";
export const HANDLE_PAGINATION_NEXT_BUTTON_CLICK = "HANDLE_PAGINATION_NEXT_BUTTON_CLICK";

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
 *  Load table and pagination scroll bar intial render by making an API call
 *  @return Object with table data, current page number, number of rows needed in a table, table name 
 */
export const load_table_pagination_bar = () => {
  return {
    type: LOAD_TABLE_PAGINATION_BAR,
    payload: {
      tableContentArray : [
       {
         unique_id: 1,
         campaign_id: 1,
         advertiser_id:1,
         name: "diaper man",
         starting_date: "24/04/2019",
         ending_date: "25/07/2019",
         cost_model: "pay per click",
         cost: "$45"
       },
       {
         unique_id: 2,
         campaign_id: 2,
         advertiser_id:1,
         name: "diaper man",
         starting_date: "24/04/2019",
         ending_date: "25/07/2019",
         cost_model: "pay per click",
         cost: "$45"
       },
       {
         unique_id: 3,
         campaign_id: 3,
         advertiser_id:1,
         name: "diaper man",
         starting_date: "24/04/2019",
         ending_date: "25/07/2019",
         cost_model: "pay per click",
         cost: "$45"
       },
       {
           unique_id: 4,
           campaign_id: 4,
           advertiser_id:1,
           name: "diaper man",
           starting_date: "24/04/2019",
           ending_date: "25/07/2019",
           cost_model: "pay per click",
           cost: "$45"
         },
         {
           unique_id: 5,
           campaign_id: 5,
           advertiser_id:1,
           name: "diaper man",
           starting_date: "24/04/2019",
           ending_date: "25/07/2019",
           cost_model: "pay per click",
           cost: "$45"
         },
         {
           unique_id: 6,
           campaign_id: 4,
           advertiser_id:1,
           name: "diaper man",
           starting_date: "24/04/2019",
           ending_date: "25/07/2019",
           cost_model: "pay per click",
           cost: "$45"
         },
         {
           unique_id: 7,
           campaign_id: 5,
           advertiser_id:1,
           name: "diaper man",
           starting_date: "24/04/2019",
           ending_date: "25/07/2019",
           cost_model: "pay per click",
           cost: "$45"
         }
     ],
     currentPage: 1,
     rowsPerPage: 4,
     tableName:"Campaigns Breakdown",
     isLoaded: true
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
     type: HANDLE_PAGINATION_PREV_BUTTON_CLICK,
     payload:  "decrement"
   }
 }

 export const  handle_pagination_next_button_click = () => {
  return{
    type: HANDLE_PAGINATION_NEXT_BUTTON_CLICK,
    payload:  "increment"
  }
}