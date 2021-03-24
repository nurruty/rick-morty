const LoginUserUC = require('../use_cases/user/LoginUser');
const GetCurrentUserUC = require('../use_cases/user/GetCurrentUser');
const AddFavouriteCharacterUC = require('../use_cases/user/AddFavouriteCharacter');
const RemoveFavouriteCharacterUC = require('../use_cases/user/RemoveFavouriteCharacter');

const UserService = require('../../domain/services/UserService');
const EncryptionService = require('../../domain/services/EncryptionService');

const getUser = async ({ email, userRepository }) => {
  const user = await GetCurrentUserUC({ email, userRepository });

  return user;
};

const loginUser = async ({ email, password, userRepository }) => {
  const user = await LoginUserUC(email, password, {
    userRepository,
    userService: UserService,
    encryptionService: EncryptionService,
  });

  return user;
};

const addFavouriteCharacterUser = async ({ email, characterId, userRepository }) => {
  await AddFavouriteCharacterUC({
    email,
    characterId,
    userRepository,
  });
};

const deleteFavouriteCharacterUser = async ({ email, characterId, userRepository }) => {
  await RemoveFavouriteCharacterUC({
    email,
    characterId,
    userRepository,
  });
};

module.exports = {
  getUser,
  loginUser,
  addFavouriteCharacterUser,
  deleteFavouriteCharacterUser,
};
