const { createCharacter } = require('../../domain/entities/Character');

const toEntity = (character) => {
  return character ? createCharacter({ ...character }) : character;
};

const toResponse = (userEntity) => {
  const { origin, location, episode = [], ...rest } = userEntity;
  return {
    ...rest,
    origin: origin.name,
    location: location.name,
    episodes: episode.length,
  };
};

module.exports = {
  toEntity,
  toResponse,
};
