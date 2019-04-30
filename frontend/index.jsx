import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// TESTING STUFF HERE
import * as sessionApiUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>REACT IS WORKING YAY</h1>, root);

  // TESTING STUFF HERE
  window.login = sessionApiUtil.login;
  window.logout = sessionApiUtil.logout;
  window.signup = sessionApiUtil.signup;

  window.getState = store.getState;
  window.dispatch = store.dispatch;
});