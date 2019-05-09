import { connect } from "react-redux";
import { fetchChatHistory } from "../../actions/chat_actions";
import ChatRoom from "./chat_room";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChatHistory: () => dispatch(fetchChatHistory())
  }
};

export default connect(
  null,
  mapDispatchToProps
)(ChatRoom);