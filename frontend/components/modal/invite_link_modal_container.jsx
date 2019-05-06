import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import InviteLinkDisplayModal from './invite_link_modal';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    servers: state.entities.servers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  }
};

export default withRouter(
  connect(
  null,
  mapDispatchToProps
)(InviteLinkDisplayModal)
);