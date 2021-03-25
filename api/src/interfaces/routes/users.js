var express = require('express');
var router = express.Router();
var { verifyToken, generateToken } = require('./security/auth');
const { toResponse } = require('../mappers/UserMapper');

const UserController = require('../../application/controllers/UserController');

const UserRouter = ({ userRepository }) => {
  router.get('/', verifyToken, function (req, res, next) {
    const { getUser } = UserController;
    const { uData } = req;

    getUser({ email: uData.email, userRepository })
      .then((user) => {
        res.send(toResponse(user));
      })
      .catch((error = {}) => {
        const { code = 500 } = error;
        res.status(code).send(error);
      });
  });

  router.post('/login', function (req, res, next) {
    const { loginUser } = UserController;
    const { body } = req;

    loginUser({ ...body, userRepository })
      .then((user) => {
        generateToken(res, user).send(toResponse(user));
      })
      .catch((error = {}) => {
        const { code = 500 } = error;
        res.status(code).send(error);
      });
  });

  router.post('/character', verifyToken, function (req, res, next) {
    const { addFavouriteCharacterUser } = UserController;
    const { body } = req;
    const { uData } = req;

    addFavouriteCharacterUser({ ...uData, ...body, userRepository })
      .then(() => {
        res.send();
      })
      .catch((error = {}) => {
        const { code = 500 } = error;
        res.status(code).send(error);
      });
  });

  router.delete('/character/:id', verifyToken, function (req, res, next) {
    const { deleteFavouriteCharacterUser } = UserController;
    const { uData, params } = req;
    const { id } = params;

    deleteFavouriteCharacterUser({ ...uData, characterId: id, userRepository })
      .then(() => {
        res.send();
      })
      .catch((error = {}) => {
        const { code = 500 } = error;
        res.status(code).send(error);
      });
  });

  return router;
};

module.exports = UserRouter;
