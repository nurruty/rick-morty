const createError = ({ code, message } = {}) => ({
  code,
  message,
});

const isNotFoundError = (error) => error && error.code === 404;

const isBadCredentialsError = (error) => error && error.code === 403;

export { createError, isNotFoundError, isBadCredentialsError };
