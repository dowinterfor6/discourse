import { connect } from 'react-redux';
import ServerModal from './server_modal';
import { createServer } from '../../actions/server_actions';
import { closeModal } from '../../actions/modal_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    createServer: (newServer) => dispatch(createServer(newServer)),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(
  null,
  mapDispatchToProps
)(ServerModal);