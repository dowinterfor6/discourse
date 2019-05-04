import merge from 'lodash/merge';
import { RECEIVE_ALL_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from '../actions/server_actions';

const serversReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_SERVERS:
      return action.servers;
    case RECEIVE_SERVER:
      newState = merge({}, state);
      return merge({}, newState, {[action.server.id]: action.server});
    case REMOVE_SERVER:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}

export default serversReducer;