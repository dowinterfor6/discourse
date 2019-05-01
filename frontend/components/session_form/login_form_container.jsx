import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import sessionForm from './session_form';

const mapStateToProps = ({errors}) => ({
  formType: 'login',
  errors: errors.session
});

// Could refactor this somehow
const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  demoLogin: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(sessionForm);