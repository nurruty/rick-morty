import { get, post, remove } from '../../infrastructure/api';
import {
  GET_CHARACTERS_API_PATH,
  GET_CHARACTER_API_PATH,
  ADD_FAVOURITE_CHARACTER_API_PATH,
  DELETE_FAVOURITE_CHARACTER_API_PATH,
} from '../../utils/constants';

const getCharactersService = ({ page }) => get(GET_CHARACTERS_API_PATH, { page });

const getCharacterService = ({ characterId }) => get(`${GET_CHARACTER_API_PATH}/${characterId}`);

const addFavouriteCharacterService = ({ characterId }) =>
  post(ADD_FAVOURITE_CHARACTER_API_PATH, {
    characterId,
  });

const deleteFavouriteCharacterService = ({ characterId }) =>
  remove(`${DELETE_FAVOURITE_CHARACTER_API_PATH}/${characterId}`, {
    characterId,
  });

export {
  getCharacterService,
  getCharactersService,
  addFavouriteCharacterService,
  deleteFavouriteCharacterService,
};
