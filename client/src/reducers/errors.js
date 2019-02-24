import { HANDLE_CAMPAIGN_URL_ERROR, HANDLE_STATS_CARDS_URL_ERROR } from '../actions/actions';

const intialState = {
    errorsCampaign: {
        error:false,
        response: null
    },
    errorsStats: {
        error:false,
        response: null
    }
}
const  errors = (state = intialState, action) => {
    switch (action.type) {
      case HANDLE_CAMPAIGN_URL_ERROR:
        return Object.assign({}, state, { errorsCampaign:{
            error:true,
            response: action.payload
        } });
      case HANDLE_STATS_CARDS_URL_ERROR:
        return Object.assign({}, state, { errorsStats:{
            error:true,
            response: action.payload
        } });
      default:
        return state
    }
}
  
export default errors;
