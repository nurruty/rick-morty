const createUser = ({ id, email, password, favouriteCharacters }) => ({
  id,
  email,
  password,
  favouriteCharacters,
});

const setFavouriteCharacter = (user, characterId) => {
  const nUser = Object.assign({}, user);
  const { favouriteCharacters = [] } = nUser;

  if (favouriteCharacters.indexOf(characterId) === -1) {
    favouriteCharacters.push(characterId);
  }

  return { ...nUser, favouriteCharacters };
};

const removeFavouriteCharacter = (user, characterId) => {
  const nUser = Object.assign({}, user);
  const { favouriteCharacters = [] } = nUser;

  const index = favouriteCharacters.indexOf(characterId);
  if (index !== -1) {
    favouriteCharacters.splice(index, 1);
  }

  return { ...nUser, favouriteCharacters };
};

module.exports = {
  createUser,
  setFavouriteCharacter,
  removeFavouriteCharacter,
};
