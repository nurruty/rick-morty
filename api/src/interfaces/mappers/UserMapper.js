const { createUser } = require('../../domain/entities/User');

const toEntity = (dbUser) => {
  const { id, email, password, favourite_characters } = dbUser;
  return dbUser ? createUser({ id, email, password, favouriteCharacters: favourite_characters }) : dbUser;
};

const toResponse = (userEntity) => {
  return {
    email: userEntity.email,
    favouriteCharacters: userEntity.favouriteCharacters,
  };
};

const toDatabase = (userEntity) => {
  return {
    id: userEntity.id,
    email: userEntity.email,
    password: userEntity.password,
    favourite_characters: userEntity.favouriteCharacters,
  };
};

module.exports = {
  toEntity,
  toResponse,
  toDatabase,
};
