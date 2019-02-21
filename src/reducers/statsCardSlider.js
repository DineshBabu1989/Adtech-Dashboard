import { LOAD_STATS_CARDS } from "../actions/actions";

const intialState = {
    isLoaded:false
  }        
const  statsCardSlider = (state = intialState, action) => {
    switch (action.type) {
      case LOAD_STATS_CARDS:
        return action.payload
      default:
        return state
    }
}
  
export default statsCardSlider;
