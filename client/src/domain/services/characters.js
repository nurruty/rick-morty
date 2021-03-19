import { get, post } from '../../infrastructure/api';
import {
  GET_CHARACTERS_API_PATH,
  GET_CHARACTER_API_PATH,
  ADD_FAVOURITE_CHARACTER_API_PATH,
  DELETE_FAVOURITE_CHARACTER_API_PATH,
} from '../../utils/constants';
import { createCharacters, createCharacter } from '../entities/character';
import { createError } from '../entities/error';

const getCharactersService = () => get(GET_CHARACTERS_API_PATH).then(createCharacters).catch(createError);

const getCharacterService = (characterId) =>
  get(`${GET_CHARACTER_API_PATH}?${characterId}`).then(createCharacter).catch(createError);

const addFavouriteCharacterService = ({ isFavourite, characterId }) =>
  post(ADD_FAVOURITE_CHARACTER_API_PATH, {
    isFavourite,
    characterId,
  }).catch(createError);

const deleteFavouriteCharacterService = ({ isFavourite, characterId }) =>
  post(DELETE_FAVOURITE_CHARACTER_API_PATH, {
    isFavourite,
    characterId,
  }).catch(createError);

export {
  getCharacterService,
  getCharactersService,
  addFavouriteCharacterService,
  deleteFavouriteCharacterService,
};
