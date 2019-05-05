import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';

//TODO: Implement loading screen if i have time
const uiReducer = combineReducers({
  modal: modalReducer
})

export default uiReducer;