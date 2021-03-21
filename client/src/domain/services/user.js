import { get, post } from '../../infrastructure/api';
import { GET_USER_API_PATH, LOGIN_USER_PATH } from '../../utils/constants';

const getCurrentUserService = () => get(GET_USER_API_PATH);

const loginUserService = ({ email, password }) =>
  post(LOGIN_USER_PATH, {
    email,
    password,
  });

export { getCurrentUserService, loginUserService };
