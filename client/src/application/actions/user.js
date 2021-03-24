const userActionTypes = {
  GET_CURRENT_USER_REQUESTED: 'GET_CURRENT_USER_REQUESTED',
  GET_CURRENT_USER_SUCCEDED: 'GET_CURRENT_USER_SUCCEDED',
  GET_CURRENT_USER_FAILED: 'GET_CURRENT_USER_FAILED',

  LOGIN_USER_REQUESTED: 'LOGIN_USER_REQUESTED',
  LOGIN_USER_SUCCEDED: 'LOGIN_USER_SUCCEDED',
  LOGIN_USER_FAILED: 'LOGIN_USER_FAILED',

  SIGNUP_USER_REQUESTED: 'SIGNUP_USER_REQUESTED',
  SIGNUP_USER_SUCCEDED: 'SIGNUP_USER_SUCCEDED',
  SIGNUP_USER_FAILED: 'SIGNUP_USER_FAILED',
};

const userActionCreators = {
  getCurrentUserRequested: () => {
    return {
      type: userActionTypes.GET_CURRENT_USER_REQUESTED,
    };
  },

  getCurrentUserSucceded: (data) => ({
    type: userActionTypes.GET_CURRENT_USER_SUCCEDED,
    payload: data,
  }),

  getCurrentUserFailed: (error) => ({
    type: userActionTypes.GET_CURRENT_USER_FAILED,
    payload: error,
  }),

  loginUser: (data) => ({
    type: userActionTypes.LOGIN_USER_REQUESTED,
    payload: data,
  }),

  loginUserSucceded: (data) => ({
    type: userActionTypes.LOGIN_USER_SUCCEDED,
    payload: data,
  }),

  loginUserFailed: (data) => ({
    type: userActionTypes.LOGIN_USER_FAILED,
    payload: data,
  }),

  signupUser: (data) => ({
    type: userActionTypes.SIGNUP_USER_REQUESTED,
  }),

  signupUserSucceded: (data) => ({
    type: userActionTypes.SIGNUP_USER_SUCCEDED,
  }),

  signupUserFailed: (data) => ({
    type: userActionTypes.SIGNUP_USER_FAILED,
  }),
};

export { userActionTypes, userActionCreators };