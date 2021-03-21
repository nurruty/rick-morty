var express = require('express');
var router = express.Router();
var { verifyToken, generateToken } = require('./security/auth');

const UserController = require('../../application/controllers/UserController');

router.get('/', verifyToken, function (req, res, next) {
  const { getUser } = UserController;
  const { uData } = req;

  getUser(uData.id, {})
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      res.error(error);
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
      res.error(error);
    });
});

router.post('/character', function (req, res, next) {
  const { addFavouriteCharacterUser } = UserController;
  const { body } = req;

  addFavouriteCharacterUser(body)
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      res.error(error);
    });
});

router.delete('/character', function (req, res, next) {
  const { deleteFavouriteCharacterUser } = UserController;
  const { body } = req;

  deleteFavouriteCharacterUser(body)
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      res.error(error);
    });
});

module.exports = router;
