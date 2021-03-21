import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './home';
import LoginPage from './login';
import Character from './character';
import Error404Page from './error';
import useUser from '../hooks/useUser';

const Routes = () => {
  const { user = {} } = useUser();
  console.log('🚀 ~ file: routes.jsx ~ line 11 ~ Routes ~ user', user);
  const { isLoggedIn = false } = user;
  console.log('🚀 ~ file: routes.jsx ~ line 12 ~ Routes ~ isLoggedIn', isLoggedIn);

  return (
    <Router>
      <Switch>
        {!isLoggedIn && <Redirect to="/login" />}
        <Route exact path="/character/:characterId" component={Character} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={HomePage} />
        <Route component={Error404Page} />
      </Switch>
    </Router>
  );
};

export default Routes;
