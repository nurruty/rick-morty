import { get } from '../../infrastructure/api';
import { GET_CHARACTERS_API_PATH, GET_CHARACTER_API_PATH } from '../../utils/constants';
import { createCharacter } from '../entities/character';
import { createError } from '../entities/error';

const getCharactersService = () => get(GET_CHARACTERS_API_PATH).then(createUser).catch(createError);

const getCharacterService = (characterId) =>
  get(`${GET_CHARACTER_API_PATH}?${characterId}`).then(createCharacter).catch(createError);

export default {
  getCharacterService,
  getCharactersService,
};
