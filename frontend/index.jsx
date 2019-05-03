import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// TESTING STUFF HERE
import * as sessionApiUtil from './util/session_api_util';
import * as serverApiUtil from './util/server_api_util';

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

  // TESTING STUFF HERE
  window.login = sessionApiUtil.login;
  window.logout = sessionApiUtil.logout;
  window.signup = sessionApiUtil.signup;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.createServer = serverApiUtil.createServer;
  window.deleteServer = serverApiUtil.deleteServer;
  window.showServer = serverApiUtil.showServer;
  window.serverIndex = serverApiUtil.serverIndex;
});