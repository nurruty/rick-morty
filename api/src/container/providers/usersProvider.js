const UserRepository = require('../../infrastructure/db/mongoose/repositories/UserRepository');
const UserRouter = require('../../interfaces/routes/users');

module.exports = function (c) {
  c.service('UserRepository', (c) => new UserRepository({ db: c.Database }));
  c.service('UserRouter', (c) => UserRouter({ userRepository: c.UserRepository }));
};
