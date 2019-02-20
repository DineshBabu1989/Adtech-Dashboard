import { HANDLE_CAMPAIGN_URL_FETCH } from "../actions/actions";

const intialState = {
    campaignFetched:false
}
const  isFetched = (state = intialState, action) => {
    switch (action.type) {
      case HANDLE_CAMPAIGN_URL_FETCH:
        return {campaignFetched:action.payload};
      default:
        return state
    }
}
export default isFetched;

