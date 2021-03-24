module.exports = (mongoDb) => {
  return new mongoDb.Schema({
    email: String,
    password: String,
    favourite_characters: [Number],
  });
};
