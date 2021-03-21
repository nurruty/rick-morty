var express = require('express');
var router = express.Router();
var { verifyToken } = require('./security/auth');

const CharactersController = require('../../application/controllers/CharacterController');

router.get('/', verifyToken, function (req, res, next) {
  const { getCharacters } = CharactersController;

  console.log('HOLAAA');

  const { query, params } = req;
  getCharacters()
    .then((characters) => {
      res.send(characters);
    })
    .catch((error) => {
      res.error(error);
    });
});

router.get('/:id', verifyToken, function (req, res, next) {
  const { getCharacter } = CharactersController;
  const { query, params } = req;

  console.log('HOLAAA4');

  getCharacter(params)
    .then((character) => {
      res.send(character);
    })
    .catch((error) => {
      res.error(error);
    });
});

module.exports = router;
