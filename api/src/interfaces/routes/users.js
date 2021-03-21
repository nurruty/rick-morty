var express = require('express');
var router = express.Router();
var { verifyToken, generateToken } = require('./security/auth');

const UserController = require('../../application/controllers/UserController');

router.get('/', verifyToken, function (req, res, next) {
  const { getUser } = UserController;
  const { uData } = req;

  getUser({ email: uData.email })
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      res.status(500).send('Error');
    });
});

router.post('/login', function (req, res, next) {
  const { loginUser } = UserController;
  const { body } = req;

  loginUser(body)
    .then((user) => {
      generateToken(res, user).send(user);
    })
    .catch((error) => {
      res.status(500).send('Error');
    });
});

router.post('/character', verifyToken, function (req, res, next) {
  const { addFavouriteCharacterUser } = UserController;
  const { body } = req;
  const { uData } = req;

  addFavouriteCharacterUser({ ...uData, ...body })
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      res.status(500).send('Error');
    });
});

router.delete('/character/:id', verifyToken, function (req, res, next) {
  const { deleteFavouriteCharacterUser } = UserController;
  const { uData, params } = req;
  const { id } = params;

  deleteFavouriteCharacterUser({ ...uData, characterId: id })
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      res.status(500).send('Error');
    });
});

module.exports = router;
