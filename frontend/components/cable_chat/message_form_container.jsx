import { connect } from "react-redux";
import MessageForm from "./message_form";

const mapStateToProps = (state) => {
  return {
    currentUser: Object.values(state.entities.users)[0]
  }
};

export default connect(
  mapStateToProps,
  null
)(MessageForm);