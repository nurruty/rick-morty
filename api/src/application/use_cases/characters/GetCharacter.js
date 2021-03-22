'use strict';

const { setIsFavourite } = require('../../../domain/entities/Character');
const { hasFavouriteCharacter } = require('../../../domain/entities/User');

module.exports = async ({ userEmail, characterId, charactersRepository, userRepository }) => {
  try {
    const character = await charactersRepository.getById(characterId);
    const user = await userRepository.getByEmail(userEmail);

    if (!character) throw new Error('Characters not found');

    if (user) {
      return setIsFavourite(character, hasFavouriteCharacter(user, character.id));
    }

    return character;
  } catch (e) {
    throw new Error(e);
  }
};
