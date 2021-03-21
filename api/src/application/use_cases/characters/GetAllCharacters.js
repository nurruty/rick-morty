'use strict';

module.exports = async ({ charactersRepository }) => {
  try {
    const characters = await charactersRepository.get();

    if (!characters) throw new Error('Characters not found');
    return characters;
  } catch (e) {
    throw new Error(e);
  }
};
