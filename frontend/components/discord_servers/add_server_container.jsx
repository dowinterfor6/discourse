import AddServerIcon from './add_server_icon';
import { createServer } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(
  null,
  mapDispatchToProps
)(AddServerIcon);