const bcrypt = require('bcryptjs');

module.exports = {
  encrypt: async (data) => {
    bcrypt.genSalt(10, function (saltError, salt) {
      bcrypt.hash(data, salt, function (hashError, hash) {
        return hash;
      });
    });
  },
  compare: async (rawData, hash, callback) => {
    return bcrypt.compare(rawData, hash);
  },
};
