import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userActionCreators } from '../actions/user';
import userSelector from '../selectors/user';
import useBindActionCreators from './useBindActionCreators';
import { useRouter } from './useRouter';

const useUser = () => {
  const { user, userLoading = false, userError } = useSelector(userSelector);
  const userActions = useBindActionCreators(userActionCreators);
  const { push } = useRouter();

  useEffect(() => {
    !user && userActions.getCurrentUserRequested();
  }, [user, userActions]);

  const loginUser = ({ email = '', password = '' }) => {
    userActions.loginUserRequested({ email, password, push });
  };

  return { user, userLoading, userError, loginUser };
};

export default useUser;
