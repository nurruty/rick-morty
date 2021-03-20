import { get, post } from '../../infrastructure/api';
import { GET_USER_API_PATH, LOGIN_USER_PATH } from '../../utils/constants';
import { createUser } from '../entities/user';
import { createError } from '../entities/error';

const getCurrentUserService = () =>
  get(GET_USER_API_PATH)
    .then(createUser)
    .catch((err) => Promise.reject(createError(err.toJSON())));

const loginUserService = ({ email, password }) =>
  post(LOGIN_USER_PATH, {
    email,
    password,
  })
    .then(createUser)
    .catch((err) => Promise.reject(createError(err.toJSON())));

export { getCurrentUserService, loginUserService };
