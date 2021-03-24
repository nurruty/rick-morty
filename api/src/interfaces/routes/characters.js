var express = require('express');
var router = express.Router();
var { verifyToken } = require('./security/auth');

const CharactersController = require('../../application/controllers/CharacterController');

const CharactersRouter = ({ charactersRepository, userRepository }) => {
  router.get('/', verifyToken, function (req, res, next) {
    const { getCharacters } = CharactersController;
    const { query, uData } = req;
    const { page } = query;

    getCharacters({ userEmail: uData.email, page, charactersRepository, userRepository })
      .then((characters) => {
        res.send(characters);
      })
      .catch((error = {}) => {
        const { code = 500 } = error;
        res.status(code).send(error);
      });
  });

  router.get('/:id', verifyToken, function (req, res, next) {
    const { getCharacter } = CharactersController;
    const { params, uData } = req;

    getCharacter({ userEmail: uData.email, charactersRepository, userRepository, ...params })
      .then((character) => {
        res.send(character);
      })
      .catch((error = {}) => {
        console.log('🚀 ~ file: characters.js ~ line 32 ~ error', error);
        const { code = 500 } = error;
        res.status(code).send(error);
      });
  });

  return router;
};

module.exports = CharactersRouter;
