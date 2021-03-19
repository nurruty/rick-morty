import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userActionCreators } from '../../domain/actions/user';
import userSelector from '../../domain/selectors/user';
import useBindActionCreators from './useBindActionCreators';

const useUser = () => {
  const { user = {}, userLoading = false, userError } = useSelector(userSelector);
  const userActions = useBindActionCreators(userActionCreators);
  const { userName, email, isLoggedIn = false } = user;

  useEffect(() => {
    !isLoggedIn && !userLoading && userActions.getCurrentUserRequested();
  }, [isLoggedIn]);

  return [userName, email, isLoggedIn];
};

export default useUser;
