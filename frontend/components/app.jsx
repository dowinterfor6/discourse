import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import landingPage from './landing_page/landing_page';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={landingPage}></Route>
    </Switch>
  </div>
)

export default App;