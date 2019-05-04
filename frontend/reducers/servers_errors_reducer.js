import { RECEIVE_SERVER_ERRORS, RECEIVE_SERVER } from "../actions/server_actions";

const serversErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVER_ERRORS:
      return action.errors;
    case RECEIVE_SERVER:
      return [];
    default:
      return state;
  }
}

export default serversErrorsReducer;