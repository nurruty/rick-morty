import './App.scss';
import Header from './components/Header/Header';
import Home from './pages/home';
import Routes from './pages/routes';
import Icon from './components/Icon/Icon';
// import SearchBar from './components/SearchBar/SearchBar';
import { connect } from 'react-redux';
import { isMobile } from '../utils';
import { useEffect, useState } from 'react';
import { userActions } from '../domain/actions/user';

function AppComponent({ user, dispatch }) {
  //const [state, setState] = useState({ isMobileSize: isMobile() });
  const { user: userEntity, userLoading = false } = user;

  useEffect(() => {
    !userEntity && userLoading && dispatch(userActions.getCurrentUser());
  }, [userEntity]);

  // const handleResize = () => {
  //   const isMobileSize = isMobile();
  //   if (state.isMobile !== isMobile) {
  //     setState({ isMobileSize });
  //   }
  // };

  useEffect(() => {
    // window.addEventListener('resize', handleResize);
  }, []);

  const handleGetSongs = (artist) => {
    //dispatch(getSongs({ artist }));
  };

  return (
    <div className="App">
      <Header
        left={<Icon name={isMobile() ? 'menu' : 'gesture'} color="secondary" size="mini" />}
        //center={<SearchBar isMobile={state.isMobileSize} placeholder="Search" onChange={handleGetSongs} />}
        right={<Icon name="heart" color="secondary" size="mini" counter={0} />}
      />
      <Routes />
    </div>
  );
}

const App = connect((state) => ({
  user: state.user,
}))(AppComponent);

export default App;
