const constants = require('../../../utils/constants');

const errorNotFound = () => {
  return { code: 404, message: constants.ERROR_NOT_FOUND };
};

const errorBadCredentials = () => {
  return { code: 403, message: constants.ERROR_BAD_CREDENTIALS };
};

const errorInternalServer = () => {
  return { code: 500, message: constants.ERROR_INTERNAL_SERVER };
};

module.exports = {
  errorBadCredentials,
  errorNotFound,
  errorInternalServer,
};
