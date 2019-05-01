import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import sessionForm from './session_form';

const mapStateToProps = ({errors}) => ({
  formType: 'signup',
  errors: errors.session
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(sessionForm)