/**
 * Get the app env by location hostname.
 *
 * @returns {String} production || development
 */
const appEnv = () => {
  const devEnvMap = {
    localhost: 'localhost',
  };

  return devEnvMap[window.location.hostname] || 'production';
};

/**
 * Checks if the current viewport is a mobile one.
 *
 * @returns {Boolean} Boolean
 */
const isMobile = () => window.innerWidth < 769;

export { appEnv, isMobile };
