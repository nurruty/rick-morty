module.exports = {
  validatePassword: async ({ password, userPassword, encryptionService }) => {
    try {
      return await encryptionService.compare(password, userPassword);
    } catch (e) {
      return false;
    }
  },
};
