'use strict';

const { removeFavouriteCharacter } = require('../../../domain/entities/User');
const { errorNotFound } = require('../errors');

module.exports = async ({ email, characterId, userRepository }) => {
  try {
    const user = await userRepository.getByEmail(email);

    if (!user) throw errorNotFound();

    await userRepository.merge(removeFavouriteCharacter(user, characterId));
  } catch (e) {
    throw e;
  }
};
