'use strict';

const { removeFavouriteCharacter } = require('../../../domain/entities/User');

module.exports = async ({ email, characterId, userRepository }) => {
  try {
    const user = await userRepository.getByEmail(email);

    if (!user) throw new Error('User not found');

    await userRepository.merge(removeFavouriteCharacter(user, characterId));
  } catch (e) {
    throw new Error(e);
  }
};
