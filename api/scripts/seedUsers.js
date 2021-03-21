const mongoose = require('mongoose');
const config = require('../src/infrastructure/config');
const bcrypt = require('bcryptjs');
const UserModel = require('../src/infrastructure/db/mongoose/schemas/User');

mongoose.set('useCreateIndex', true);
mongoose.promise = global.Promise;

mongoose.connect(config.database.url, { useNewUrlParser: true }).then(async (db) => {
  bcrypt.genSalt(10, async (saltError, salt) => {
    bcrypt.hash('testPass', salt, async (hashError, hash) => {
      const user = new UserModel({ email: 'rick@gmail.com', password: hash });
      await user.save();
      await db.connection.close();
    });
  });
});
