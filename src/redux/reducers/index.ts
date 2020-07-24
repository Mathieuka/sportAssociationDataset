import { combineReducers } from 'redux';
import { getDataReducer } from './getData_reducer';

const rootReducer = combineReducers({
  getDataReducer,
});

export default rootReducer;
