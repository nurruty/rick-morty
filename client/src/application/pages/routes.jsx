import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './home';
import LoginPage from './login';
import Character from './character';
import Error404Page from './error';
import useUser from '../hooks/useUser';

const Routes = () => {
  const [, , isLoggedId] = useUser();

  return (
    <Router>
      <Switch>
        {/* {!isLoggedId && <Redirect to="/login" />} */}
        <Route path="/character/:characterId" component={Character} />
        <Route path="/login" component={LoginPage} />
        <Route path="/error404" component={Error404Page} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
