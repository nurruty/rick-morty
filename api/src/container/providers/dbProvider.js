const db = require('../../infrastructure/db/mongoose/mongoose');

module.exports = function (c) {
  c.service('Database', (c) => db);
};
