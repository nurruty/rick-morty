const App = require('../../infrastructure/http/app');

module.exports = function (c) {
  c.service('App', (c) => App({ userRouter: c.UserRouter, charactersRouter: c.CharactersRouter }));
};
