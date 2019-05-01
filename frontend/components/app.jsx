import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import landingPage from './landing_page/landing_page';
import login_form_container from './session_form/login_form_container';
import signup_form_container from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={login_form_container}></Route>
      <Route exact path="/signup" component={signup_form_container}></Route>
      <Route exact path="/" component={landingPage}></Route>
    </Switch>
  </div>
)

export default App;