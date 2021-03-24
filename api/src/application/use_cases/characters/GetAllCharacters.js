'use strict';

const { setIsFavourite } = require('../../../domain/entities/Character');
const { hasFavouriteCharacter } = require('../../../domain/entities/User');
const { errorNotFound } = require('../errors');

module.exports = async ({ userEmail, page, charactersRepository, userRepository }) => {
  try {
    const characters = await charactersRepository.get(page);
    const user = await userRepository.getByEmail(userEmail);

    if (!characters) throw errorNotFound();

    if (user) {
      return characters.map((character) =>
        setIsFavourite(character, hasFavouriteCharacter(user, character.id))
      );
    }

    return characters;
  } catch (e) {
    throw e;
  }
};
