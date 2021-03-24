const GetAllCharactersUC = require('../use_cases/characters/GetAllCharacters');
const GetCharacterUC = require('../use_cases/characters/GetCharacter');

const { toResponse } = require('../../interfaces/mappers/CharacterMapper');

const getCharacters = async ({ userEmail, page, charactersRepository, userRepository }) => {
  const characters = await GetAllCharactersUC({ userEmail, page, charactersRepository, userRepository });

  return characters.map(toResponse);
};

const getCharacter = async ({ id, email, charactersRepository, userRepository }) => {
  const character = await GetCharacterUC({
    characterId: id,
    userEmail: email,
    charactersRepository,
    userRepository,
  });

  return toResponse(character);
};

module.exports = {
  getCharacters,
  getCharacter,
};
