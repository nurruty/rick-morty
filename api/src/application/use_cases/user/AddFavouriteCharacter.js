'use strict';

const { setFavouriteCharacter } = require('../../../domain/entities/User');
const { errorNotFound } = require('../errors');

module.exports = async ({ email, characterId, userRepository }) => {
  try {
    const user = await userRepository.getByEmail(email);

    if (!user) throw errorNotFound();

    await userRepository.merge(setFavouriteCharacter(user, characterId));

    // return updatedUser;
  } catch (e) {
    throw e;
  }
};
