import { combineReducers } from 'redux';
import toggleSideBar from './toggleSideBar';
import tableDisplayWithPagination from './tableDisplayWithPagination';

const rootReducer = combineReducers({
  toggleSideBar: toggleSideBar,
  tableDisplayWithPagination: tableDisplayWithPagination

});

export default rootReducer;