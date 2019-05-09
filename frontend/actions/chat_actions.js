import * as chatUtil from '../util/chat_util'
export const RECEIVE_CHAT_HISTORY = "RECEIVE_CHAT_HISTORY"

const receiveChatHistory = (messages) => ({
  type: RECEIVE_CHAT_HISTORY,
  messages
});

export const fetchChatHistory = (server_id) => (dispatch) => (
  chatUtil.getChatHistory(server_id)
    .then(
      (messages) => dispatch(receiveChatHistory(messages))
    )
);