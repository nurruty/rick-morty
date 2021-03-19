import './App.scss';
import Header from './components/Header/Header';
import Home from './pages/home';
import Routes from './pages/routes';
import Icon from './components/Icon/Icon';
// import SearchBar from './components/SearchBar/SearchBar';
import { connect, useSelector } from 'react-redux';
import { isMobile } from '../utils';
import { useEffect, useState } from 'react';
import { userActionCreators } from '../domain/actions/user';
import useBindActionCreator from './hooks/useBindActionCreators';
import userSelector from '../domain/selectors/user';
import useUser from './hooks/useUser';

function AppComponent(props) {
  //const [state, setState] = useState({ isMobileSize: isMobile() });
  const [, , isLoggedIn] = useUser();

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
