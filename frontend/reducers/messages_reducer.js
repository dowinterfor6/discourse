import { RECEIVE_CHAT_HISTORY } from '../actions/chat_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHAT_HISTORY:
      return action.messages;
    default:
      return state;
  }
}

export default messagesReducer;