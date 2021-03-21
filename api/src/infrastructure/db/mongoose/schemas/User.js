const mongoose = require('../mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  favourite_characters: [Number],
});

module.exports = mongoose.model('User', userSchema);
