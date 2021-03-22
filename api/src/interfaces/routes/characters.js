var express = require('express');
var router = express.Router();
var { verifyToken } = require('./security/auth');

const CharactersController = require('../../application/controllers/CharacterController');

router.get('/', verifyToken, function (req, res, next) {
  const { getCharacters } = CharactersController;
  const { query, uData } = req;
  const { page } = query;

  getCharacters({ userEmail: uData.email, page })
    .then((characters) => {
      res.send(characters);
    })
    .catch((error) => {
      res.status(500).send('Error');
    });
});

router.get('/:id', verifyToken, function (req, res, next) {
  const { getCharacter } = CharactersController;
  const { query, params, uData } = req;

  getCharacter({ userEmail: uData.email, ...params })
    .then((character) => {
      res.send(character);
    })
    .catch((error) => {
      res.status(500).send('Error');
    });
});

module.exports = router;
