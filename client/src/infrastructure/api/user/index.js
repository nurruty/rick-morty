import { get, post } from '../http';
import { GET_USER_API_PATH, LOGIN_USER_PATH } from '../../../utils/constants';

export const userServices = {
  getCurrentUserService: () => get(GET_USER_API_PATH),

  loginUserService: ({ email, password }) =>
    post(LOGIN_USER_PATH, {
      email,
      password,
    }),
};
