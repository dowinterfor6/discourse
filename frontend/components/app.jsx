import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import landingPage from './landing_page/landing_page';
import loginFormContainer from './session_form/login_form_container';
import signupFormContainer from './session_form/signup_form_container';
import serverIndexContainer from './discord_servers/server_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import landingChannelContainer from './channel_content/landing_channel_container';

const App = () => (
  <div>
    {/* <Switch> */}
    <ProtectedRoute path="/servers" component={serverIndexContainer}></ProtectedRoute>
    {/* <ProtectedRoute exact path="/servers" component={landingChannelContainer}></ProtectedRoute> */}
    <AuthRoute exact path="/login" component={loginFormContainer}></AuthRoute>
    <AuthRoute exact path="/signup" component={signupFormContainer}></AuthRoute>
    <AuthRoute exact path="/" component={landingPage}></AuthRoute>
    {/* </Switch> */}
  </div>
)

export default App;