'use strict';

const { setIsFavourite } = require('../../../domain/entities/Character');
const { hasFavouriteCharacter } = require('../../../domain/entities/User');

module.exports = async ({ userEmail, page, charactersRepository, userRepository }) => {
  try {
    const characters = await charactersRepository.get(page);
    const user = await userRepository.getByEmail(userEmail);

    if (!characters) throw new Error('Characters not found');

    if (user) {
      return characters.map((character) =>
        setIsFavourite(character, hasFavouriteCharacter(user, character.id))
      );
    }

    return characters;
  } catch (e) {
    throw new Error(e);
  }
};
