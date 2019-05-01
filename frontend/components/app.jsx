import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import landingPage from './landing_page/landing_page';
import loginFormContainer from './session_form/login_form_container';
import signupFormContainer from './session_form/signup_form_container';
import serverIndexContainer from './discord_servers/server_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute exact path="/servers" component={serverIndexContainer}></ProtectedRoute>
      <Route exact path="/login" component={loginFormContainer}></Route>
      <Route exact path="/signup" component={signupFormContainer}></Route>
      <Route exact path="/" component={landingPage}></Route>
    </Switch>
  </div>
)

export default App;