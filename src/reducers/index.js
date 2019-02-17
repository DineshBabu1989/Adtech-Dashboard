import { combineReducers } from 'redux';
import toggleSideBar from './toggleSideBar';

const rootReducer = combineReducers({
  toggleSideBar: toggleSideBar
});

export default rootReducer;