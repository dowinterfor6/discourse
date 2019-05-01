import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {login} from '../../actions/session_actions';
import sessionForm from './session_form';

const mapStateToProps = ({errors}) => ({
  formType: 'login',
  errors: errors.session
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(sessionForm);