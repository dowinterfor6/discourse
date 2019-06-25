import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import LandingChannel from "./landing_channel";
import { userIndex } from "../../util/user_util";

const mapStateToProps = (state) => {
  return {
    currentUser: Object.values(state.entities.users)[0]
  }
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchUsers: () => dispatch(userIndex)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingChannel);