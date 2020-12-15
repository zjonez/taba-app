import { combineReducers } from 'redux';
import NamesReducer from './names';

const AllReducers = combineReducers({
  names: NamesReducer
});

export default AllReducers;