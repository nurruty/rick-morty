import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Signup from './signup';
import Character from './character';
import Error404 from './error';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/character/:charcaterId" component={Character} />
      {/* <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/404" component={Error404} />
      <Route path="/" component={Home} /> */}
    </Switch>
  </Router>
);

export default Routes;
