import { connect } from 'react-redux';
import ServerModal from './server_modal';
import { createServer, joinServer, deleteServerErrors } from '../../actions/server_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({errors}) => ({
    errors: errors.servers
})

const mapDispatchToProps = (dispatch) => {
  return {
    createServer: (newServer) => dispatch(createServer(newServer)),
    joinServer: (link) => dispatch(joinServer(link)),
    closeModal: () => dispatch(closeModal()),
    deleteServerErrors: () => dispatch(deleteServerErrors())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerModal);