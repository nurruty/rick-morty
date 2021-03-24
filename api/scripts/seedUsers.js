const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.set('useCreateIndex', true);
mongoose.promise = global.Promise;

const url = "mongodb://mongodb:27017"

mongoose.connect(url, { useNewUrlParser: true }).then(async (db) => {
  bcrypt.genSalt(10, async (saltError, salt) => {
    bcrypt.hash('seedPass123', salt, async (hashError, hash) => {
      const UserSchema = new mongoose.Schema({
        email: String,
        password: String,
        favourite_characters: [Number],
      });
      const UserModel = mongoose.model('User', UserSchema);
      const user = new UserModel({ email: 'rick@gmail.com', password: hash, favourite_characters: [] });
      await user.save();
      await db.connection.close();
    });
  });
});
