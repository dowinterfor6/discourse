import { connect } from 'react-redux';
import { signup, login, deleteErrors } from '../../actions/session_actions';
import sessionForm from './session_form';

const mapStateToProps = ({errors}) => ({
  formType: 'signup',
  errors: errors.session
});

// Could refactor this somehow
const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  demoLogin: (user) => dispatch(login(user)),
  deleteErrors: () => dispatch(deleteErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(sessionForm);