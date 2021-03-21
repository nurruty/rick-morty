const { createCharacter } = require('../../domain/entities/Character');

const toEntity = (character) => {
  const { id, name, status, species, image, origin, location, episode } = character;
  return character
    ? createCharacter({ id, name, status, species, image, origin, location, episodes: episode })
    : character;
};

const toResponse = (userEntity) => {
  const { origin, location, episodes = [] } = userEntity;
  return {
    ...userEntity,
    origin: origin.name,
    location: location.name,
    episodes: episodes.map((e) => e.charAt(e.length - 1)),
  };
};

module.exports = {
  toEntity,
  toResponse,
};
