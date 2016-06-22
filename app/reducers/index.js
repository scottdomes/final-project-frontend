import { combineReducers } from 'redux';
import PackingListReducer from './PackingListReducer';
import EventConfigReducer from './EventConfigReducer';

export default combineReducers({
  EventConfigReducer,
  PackingListReducer
})