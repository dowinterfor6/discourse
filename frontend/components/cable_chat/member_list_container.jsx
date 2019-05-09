import { connect } from "react-redux";
import MemberList from "./member_list";
import { fetchServer } from "../../actions/server_actions";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServer: (id) => dispatch(fetchServer(id))
  }
};

export default connect(
  null,
  mapDispatchToProps
)(MemberList);