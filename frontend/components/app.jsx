import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import landingPage from './landing_page/landing_page';
import loginFormContainer from './session_form/login_form_container';
import signupFormContainer from './session_form/signup_form_container';
import serverIndexContainer from './discord_servers/server_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <ProtectedRoute exact path="/servers" component={serverIndexContainer}></ProtectedRoute>
    <Switch>
      <AuthRoute exact path="/login" component={loginFormContainer}></AuthRoute>
      <AuthRoute exact path="/signup" component={signupFormContainer}></AuthRoute>
      <Route exact path="/" component={landingPage}></Route>
    </Switch>
  </div>
)

export default App;