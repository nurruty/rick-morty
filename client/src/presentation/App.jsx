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

function AppComponent(props) {
  //const [state, setState] = useState({ isMobileSize: isMobile() });
  const { user } = useUser();
  const { isLoggedIn = false } = user || {};

  // const handleResize = () => {
  //   const isMobileSize = isMobile();
  //   if (state.isMobile !== isMobile) {
  //     setState({ isMobileSize });
  //   }
  // };

  return (
    <div className="App">
      <header>
        <h1 className="App-heading">
          Rick <span>And</span> Morty
        </h1>
      </header>
      {user && (
        <Router>
          <Switch>
            <GuestRoute isLoggedIn={isLoggedIn} exact path="/login" component={LoginPage} />
            <ProtectedRoute
              exact
              path="/character/:characterId"
              isLoggedIn={isLoggedIn}
              component={Character}
            />
            <ProtectedRoute exact path="/" component={HomePage} isLoggedIn={isLoggedIn} />
            <Route component={Error404Page} />
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
