import { get, post } from '../../infrastructure/api';
import {
  GET_USER_API_PATH,
  LOGIN_USER_PATH,
  SIGNUP_USER_PATH,
  UPDATE_FAVOURITE_CHARACTER,
} from '../../utils/constants';
import { createUser } from '../entities/user';
import { createError } from '../entities/error';

const getCurrentUserService = () => get(GET_USER_API_PATH).then(createUser).catch(createError);

const loginUserService = ({ email, password }) =>
  post(LOGIN_USER_PATH, {
    email,
    password,
  })
    .then(createUser)
    .catch(createError);

const signupUserService = ({ nickName, email, password }) =>
  post(SIGNUP_USER_PATH, {
    nickName,
    email,
    password,
  })
    .then(createUser)
    .catch(createError);

const updateFavouriteCharacterService = ({ isFavourite, characterId }) =>
  post(UPDATE_FAVOURITE_CHARACTER, {
    isFavourite,
    characterId,
  }).catch(createError);

export { getCurrentUserService, loginUserService, signupUserService, updateFavouriteCharacterService };
