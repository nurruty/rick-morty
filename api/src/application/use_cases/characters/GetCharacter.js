'use strict';

module.exports = async ({ characterId, charactersRepository }) => {
  try {
    const character = await charactersRepository.getById(characterId);

    if (!character) throw new Error('Characters not found');
    return character;
  } catch (e) {
    throw new Error(e);
  }
};
