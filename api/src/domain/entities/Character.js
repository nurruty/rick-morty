const createCharacter = ({ id, name, status, species, image, origin, location, episodes }) => ({
  id,
  name,
  status,
  species,
  image,
  origin,
  location,
  episodes,
});

module.exports = { createCharacter };
