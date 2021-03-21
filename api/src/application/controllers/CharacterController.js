const GetAllCharactersUC = require('../use_cases/characters/GetAllCharacters');
const GetCharacterUC = require('../use_cases/characters/GetCharacter');

const CharacterRepository = require('../../infrastructure/http/repositories/CharacterRepository');
const { toResponse } = require('../../interfaces/mappers/CharacterMapper');

const getCharacters = async () => {
  const charactersRepository = new CharacterRepository();

  const characters = await GetAllCharactersUC({ charactersRepository });

  return characters.map(toResponse);
};

const getCharacter = async (params) => {
  const { id } = params;

  const charactersRepository = new CharacterRepository();

  const character = await GetCharacterUC({ characterId: id, charactersRepository });

  return toResponse(character);
};

module.exports = {
  getCharacters,
  getCharacter,
};
