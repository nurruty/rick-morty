import './App.scss';
import Routes from './pages/routes';
import { connect } from 'react-redux';
import { isMobile } from '../utils';
import useUser from './hooks/useUser';

function AppComponent(props) {
  //const [state, setState] = useState({ isMobileSize: isMobile() });
  const { isLoggedIn } = useUser();

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
      <Routes />
    </div>
  );
}

const App = connect((state) => ({
  user: state.user,
}))(AppComponent);

export default App;
