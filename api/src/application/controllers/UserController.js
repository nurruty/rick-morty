const getUser = async (userId, { repository }) => {
  return {
    email: 'nicourruty',
  };
  // try {
  //   const user = await repository.get(userId);
  //   return user;
  // } catch (e) {
  //   return { code: '1', message: 'Not found' };
  // }
};

const loginUser = async (data) => {
  const user = {
    email: 'nico',
    id: 1,
  };

  return user;
};

const addFavouriteCharacterUser = async (data) => {
  const character = {
    email: 'nico',
    id: 1,
    characters: [1],
  };

  return user;
};

const deleteFavouriteCharacterUser = async (data) => {
  const user = {
    email: 'nico',
    id: 1,
    characters: [],
  };

  return user;
};

module.exports = {
  getUser,
  loginUser,
  addFavouriteCharacterUser,
  deleteFavouriteCharacterUser,
};
