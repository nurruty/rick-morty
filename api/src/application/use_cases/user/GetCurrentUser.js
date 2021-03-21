'use strict';

module.exports = async ({ email, userRepository }) => {
  try {
    const user = await userRepository.getByEmail(email);

    if (!user) throw new Error('User not found');
    return user;
  } catch (e) {
    throw new Error(e);
  }
};
