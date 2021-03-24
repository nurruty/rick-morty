const CharactersRepository = require('../../infrastructure/http/repositories/CharacterRepository');
const CharactersRouter = require('../../interfaces/routes/characters');

module.exports = function (c) {
  c.service('CharactersRepository', (c) => new CharactersRepository({ db: c.Database }));
  c.service('CharactersRouter', (c) =>
    CharactersRouter({ charactersRepository: c.CharactersRepository, userRepository: c.UserRepository })
  );
};
