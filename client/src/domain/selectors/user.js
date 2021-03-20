import { getFavouriteCharacters } from '../entities/user';

export const userSelector = (state) => {
  const { userSate = {} } = state;
  const { user, userLoading, userError } = userSate;

  return { user, userLoading, userError };
};

export const userFavouriteCharactersSelector = (state) => {
  const { user = {} } = userSelector(state);
  return getFavouriteCharacters(user);
};

export default userSelector;
