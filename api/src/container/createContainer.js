const Container = require('./container');

module.exports = function () {
  let container = new Container();

  require('./providers/dbProvider')(container);
  require('./providers/charactersProvider')(container);
  require('./providers/usersProvider')(container);
  require('./providers/appProvider')(container);

  return container;
};
