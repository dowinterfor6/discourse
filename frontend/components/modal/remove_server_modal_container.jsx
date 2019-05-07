import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import RemoveServerModal from './remove_server_modal';
import { deleteServer, leaveServer } from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    servers: state.entities.servers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    deleteServer: (id) => dispatch(deleteServer(id)),
    leaveServer: (id) => dispatch(leaveServer(id))
  }
};

export default connect(
  null,
  mapDispatchToProps
)(RemoveServerModal)