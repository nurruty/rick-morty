const GetAllCharactersUC = require('../use_cases/characters/GetAllCharacters');
const GetCharacterUC = require('../use_cases/characters/GetCharacter');

const CharacterRepository = require('../../infrastructure/http/repositories/CharacterRepository');
const UserRepository = require('../../infrastructure/db/mongoose/repositories/UserRepository');

const { toResponse } = require('../../interfaces/mappers/CharacterMapper');

const getCharacters = async ({ userEmail, page }) => {
  const charactersRepository = new CharacterRepository();
  const userRepository = new UserRepository();

  const characters = await GetAllCharactersUC({ userEmail, page, charactersRepository, userRepository });

  return characters.map(toResponse);
};

const getCharacter = async (params) => {
  const { id, userEmail } = params;

  const charactersRepository = new CharacterRepository();
  const userRepository = new UserRepository();

  const character = await GetCharacterUC({
    characterId: id,
    userEmail,
    charactersRepository,
    userRepository,
  });

  return toResponse(character);
};

module.exports = {
  getCharacters,
  getCharacter,
};
