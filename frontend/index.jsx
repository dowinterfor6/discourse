import React from 'react';
import ReactDOM from 'react-dom';
// TESTING STUFF HERE
import * as sessionApiUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>REACT IS WORKING YAY</h1>, root);

  // TESTING STUFF HERE
  window.login = sessionApiUtil.login;
  window.logout = sessionApiUtil.logout;
  window.signup = sessionApiUtil.signup;
});