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

export { appEnv };
