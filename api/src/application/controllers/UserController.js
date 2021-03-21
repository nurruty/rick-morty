const LoginUserUC = require('../use_cases/user/LoginUser');
const GetCurrentUserUC = require('../use_cases/user/GetCurrentUser');
const AddFavouriteCharacterUC = require('../use_cases/user/AddFavouriteCharacter');
const RemoveFavouriteCharacterUC = require('../use_cases/user/RemoveFavouriteCharacter');

const UserRepository = require('../../infrastructure/db/mongoose/repositories/UserRepository');
const UserService = require('../../domain/services/UserService');
const EncryptionService = require('../../domain/services/EncryptionService');

const getUser = async ({ email }) => {
  const userRepository = new UserRepository();

  const user = await GetCurrentUserUC({ email, userRepository });

  return user;
};

const loginUser = async ({ email, password }) => {
  const userRepository = new UserRepository();

  const user = await LoginUserUC(email, password, {
    userRepository,
    userService: UserService,
    encryptionService: EncryptionService,
  });

  return user;
};

const addFavouriteCharacterUser = async ({ email, characterId }) => {
  const userRepository = new UserRepository();

  await AddFavouriteCharacterUC({
    email,
    characterId,
    userRepository,
  });
};

const deleteFavouriteCharacterUser = async ({ email, characterId }) => {
  const userRepository = new UserRepository();

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
