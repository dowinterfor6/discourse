import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import serverIndex from "./server_index";
import { fetchAllServers, fetchServer, createServer, deleteServer } from "../../actions/server_actions";

const mapStateToProps = (state) => {
  return {
    servers: state.entities.servers
  }
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchAllServers: () => dispatch(fetchAllServers()),
  fetchServer: (id) => dispatch(fetchServer(id)),
  createServer: (newServer) => dispatch(createServer(newServer)),
  deleteServer: (id) => dispatch(deleteServer(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(serverIndex);