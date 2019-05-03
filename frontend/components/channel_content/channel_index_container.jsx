import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import ChannelIndex from "./channel_index";

const mapStateToProps = (state) => {
  return {
    currentUser: Object.values(state.entities.users)[0]
  }
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex);