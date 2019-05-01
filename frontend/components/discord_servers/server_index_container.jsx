import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import serverIndex from "./server_index";

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatchToProps
)(serverIndex);