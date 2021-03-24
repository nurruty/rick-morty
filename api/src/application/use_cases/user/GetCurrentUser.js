'use strict';

const { errorNotFound } = require('../errors');

module.exports = async ({ email, userRepository }) => {
  try {
    const user = await userRepository.getByEmail(email);

    if (!user) throw errorNotFound();
    return user;
  } catch (e) {
    throw e;
  }
};
