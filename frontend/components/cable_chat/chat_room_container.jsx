import { connect } from "react-redux";
import { fetchChatHistory } from "../../actions/chat_actions";
import ChatRoom from "./chat_room";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChatHistory: (server_id) => dispatch(fetchChatHistory(server_id))
  }
};

export default connect(
  null,
  mapDispatchToProps
)(ChatRoom);