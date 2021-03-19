const createCharacter = ({ id, name, status, species, gender, origin, location, image, episodes } = {}) => ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  location,
  image,
  episodes,
});

const createCharacters = (characters = []) =>
  characters.reduce((chrs, ch) => {
    return [...chrs, createCharacter(ch)];
  }, []);

export { createCharacter, createCharacters };
