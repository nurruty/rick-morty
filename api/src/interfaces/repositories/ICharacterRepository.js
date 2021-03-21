'use strict';

module.exports = class {
  get(page) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  getById(characterId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
};
