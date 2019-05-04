import AddServerIcon from './add_server_icon';
import { createServer } from '../../actions/server_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  createServer: () => dispatch(createServer)
});

export default connect(
  null,
  mapDispatchToProps
)(AddServerIcon);