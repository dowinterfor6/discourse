import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import ChannelIndex from "./channel_index";
import { fetchServer, fetchAllServers } from "../../actions/server_actions";

const mapStateToProps = (state) => {
  return {
    currentUser: Object.values(state.entities.users)[0]
  }
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchServer: (id) => dispatch(fetchServer(id)),
  fetchAllServers: () => dispatch(fetchAllServers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex);