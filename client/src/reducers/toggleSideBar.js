import { TOGGLE_SIDE_BAR } from '../actions/actions';

const  toggleSideBar = (state = false, action) => {

    switch (action.type) {
      case TOGGLE_SIDE_BAR:
        return !action.payload
      default:
        return state
    }
}
  
export default toggleSideBar;
