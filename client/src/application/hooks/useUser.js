import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userActionCreators } from '../../domain/actions/user';
import userSelector from '../../domain/selectors/user';
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
    userActions.loginUser({ email, password, push });
  };

  return { user, userLoading, userError, loginUser };
};

export default useUser;
