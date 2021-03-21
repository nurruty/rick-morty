'use strict';

module.exports = async (email, password, { userRepository, userService, encryptionService }) => {
  try {
    const user = await userRepository.getByEmail(email);

    if (!user) throw new Error('User not found');

    const validPassword = await userService.validatePassword({
      password,
      userPassword: user.password,
      encryptionService,
    });

    if (validPassword) {
      return user;
    } else {
      throw new Error('Bad credentials');
    }
  } catch (e) {
    throw new Error(e);
  }
};
