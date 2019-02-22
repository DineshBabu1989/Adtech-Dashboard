import { HANDLE_CAMPAIGN_URL_FETCH, HANDLE_STATS_CARDS_URL_FETCH } from "../actions/actions";

const intialState = {
    campaignFetched:false,
    statsFetched:false,
}
const  isFetched = (state = intialState, action) => {
    switch (action.type) {
      case HANDLE_CAMPAIGN_URL_FETCH:
        return Object.assign({}, state, {campaignFetched:action.payload}); 
      case HANDLE_STATS_CARDS_URL_FETCH:
        return Object.assign({}, state, {statsFetched:action.payload}); 
      default:
        return state
    }
}

export default isFetched;

