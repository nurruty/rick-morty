import { get, post, remove } from '../http';
import {
  GET_CHARACTERS_API_PATH,
  GET_CHARACTER_API_PATH,
  ADD_FAVOURITE_CHARACTER_API_PATH,
  DELETE_FAVOURITE_CHARACTER_API_PATH,
} from '../../../utils/constants';

export const characterServices = {
  getCharactersService: ({ page }) => get(GET_CHARACTERS_API_PATH, { page }),
  getCharacterService: ({ characterId }) => get(`${GET_CHARACTER_API_PATH}/${characterId}`),

  addFavouriteCharacterService: ({ characterId }) =>
    post(ADD_FAVOURITE_CHARACTER_API_PATH, {
      characterId,
    }),
  deleteFavouriteCharacterService: ({ characterId }) =>
    remove(`${DELETE_FAVOURITE_CHARACTER_API_PATH}/${characterId}`, {
      characterId,
    }),
};
