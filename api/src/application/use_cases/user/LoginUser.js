'use strict';
const { errorNotFound, errorBadCredentials } = require('../../use_cases/errors');

module.exports = async (email, password, { userRepository, userService, encryptionService }) => {
  try {
    const user = await userRepository.getByEmail(email);

    if (!user) throw errorNotFound();

    const validPassword = await userService.validatePassword({
      password,
      userPassword: user.password,
      encryptionService,
    });

    if (validPassword) {
      return user;
    } else {
      throw errorBadCredentials();
    }
  } catch (e) {
    throw e;
  }
};
