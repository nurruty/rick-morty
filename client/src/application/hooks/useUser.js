import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userActionCreators } from '../../domain/actions/user';
import userSelector from '../../domain/selectors/user';
import useBindActionCreators from './useBindActionCreators';

const useUser = () => {
  const { user = {}, userLoading = false, userError } = useSelector(userSelector);
  const userActions = useBindActionCreators(userActionCreators);
  const { isLoggedIn = false } = user;

  useEffect(() => {
    !isLoggedIn && !userLoading && userActions.getCurrentUserRequested();
  }, [isLoggedIn]);

  const loginUser = ({ email = '', password = '' }) => {
    userActions.loginUser({ email, password });
  };

  return { user, loginUser };
};

export default useUser;
