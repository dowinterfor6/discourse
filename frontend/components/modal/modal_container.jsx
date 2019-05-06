import {connect} from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import Modal from './modal';
import { fetchServer } from '../../actions/server_actions';

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
    servers: state.entities.servers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)