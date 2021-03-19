/**
 * Get the app env by location hostname.
 *
 * @returns {String} production || development
 */
const appEnv = () => process.env.NODE_ENV;

/**
 * Checks if the current viewport is a mobile one.
 *
 * @returns {Boolean} Boolean
 */
const isMobile = () => window.innerWidth < 769;

export { appEnv, isMobile };
