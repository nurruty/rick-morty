const createCharacter = ({ id, name, status, species, image, origin, location, gender, type, episode }) => ({
  id,
  name,
  status,
  species,
  image,
  gender,
  type,
  origin,
  location,
  episode,
});

const setIsFavourite = (character, isFavourite) => ({
  ...character,
  isFavourite,
});

module.exports = { createCharacter, setIsFavourite };
