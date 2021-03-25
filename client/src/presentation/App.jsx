import './App.scss';
import { connect } from 'react-redux';
import { isMobile } from '../utils';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import GuestRoute from './components/Routes/GuestRoute';
import HomePage from './pages/home';
import Error404Page from './pages/error';
import Character from './pages/character';
import useUser from '../application/hooks/useUser';
import { useEffect, useState } from 'react';

function AppComponent(props) {
  const [isMobileSize, setIsMobileSize] = useState(isMobile());
  const { user } = useUser();
  const { isLoggedIn = false } = user || {};

  const handleResize = () => {
    if (isMobileSize !== isMobile()) {
      setIsMobileSize(isMobile());
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  const mobileClass = isMobileSize ? ' App_mobile' : '';

  return (
    <div className={'App' + mobileClass}>
      <header>
        <h1 className="App-heading">
          Rick <span>And</span> Morty
        </h1>
      </header>
      {user && (
        <Router>
          <Switch>
            <GuestRoute
              isMobileSize={isMobileSize}
              isLoggedIn={isLoggedIn}
              exact
              path="/login"
              component={LoginPage}
            />
            <ProtectedRoute
              exact
              path="/character/:characterId"
              isLoggedIn={isLoggedIn}
              component={Character}
              isMobileSize={isMobileSize}
            />
            <ProtectedRoute
              exact
              path="/"
              component={HomePage}
              isLoggedIn={isLoggedIn}
              isMobileSize={isMobileSize}
            />
            <Route component={Error404Page} isMobileSize={isMobileSize} />
          </Switch>
        </Router>
      )}
    </div>
  );
}

const App = connect((state) => ({
  user: state.user,
}))(AppComponent);

export default App;
