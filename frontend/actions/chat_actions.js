import * as chatUtil from '../util/chat_util'
export const RECEIVE_CHAT_HISTORY = "RECEIVE_CHAT_HISTORY"

const receiveChatHistory = (messages) => ({
  type: RECEIVE_CHAT_HISTORY,
  messages
});

export const fetchChatHistory = () => (dispatch) => (
  chatUtil.getChatHistory()
    .then(
      (messages) => dispatch(receiveChatHistory(messages))
    )
);