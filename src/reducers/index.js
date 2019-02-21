import { combineReducers } from 'redux';
import toggleSideBar from './toggleSideBar';
import errors from './errors';
import isFetched from './isFetched';
import statsCardSlider from './statsCardSlider';
import tableDisplayWithPagination from './tableDisplayWithPagination';

const rootReducer = combineReducers({
  toggleSideBar: toggleSideBar,
  statsCardSlider:statsCardSlider,
  tableDisplayWithPagination: tableDisplayWithPagination,
  errors:errors,
  isFetched:isFetched,


});
export default rootReducer;