const createCharacter = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  location,
  image,
  type,
  episodes,
  isFavourite,
} = {}) => ({
  id,
  name,
  status,
  species,
  gender,
  type,
  origin,
  location,
  image,
  episodes,
  isFavourite,
});

const createCharacters = (characters = []) =>
  characters.reduce((chrs, ch) => {
    return [...chrs, createCharacter(ch)];
  }, []);

const setFavouriteCharacter = (character, isFavourite) => {
  return { ...character, isFavourite };
};

export { createCharacter, createCharacters, setFavouriteCharacter };
