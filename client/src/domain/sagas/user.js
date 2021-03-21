import { userActionTypes } from '../actions/user';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getCurrentUserService, loginUserService } from '../services/user';
import { createError } from '../entities/error';
import { createUser } from '../entities/user';

function* getCurrentUser() {
  try {
    const user = yield call(getCurrentUserService);

    yield put({ type: userActionTypes.GET_CURRENT_USER_SUCCEDED, payload: { user: createUser(user) } });
  } catch (e) {
    yield put({ type: userActionTypes.GET_CURRENT_USER_FAILED, payload: { error: createError(e) } });
  }
}

function* loginUser({ payload }) {
  const { email, password } = payload;
  try {
    const user = yield call(loginUserService, { email, password });
    yield put({ type: userActionTypes.LOGIN_USER_SUCCEDED, payload: { user: createUser(user) } });
  } catch (e) {
    yield put({ type: userActionTypes.LOGIN_USER_FAILED, payload: { error: createError(e) } });
  }
}

const watchGetCurrentUser = function* () {
  yield takeLatest(userActionTypes.GET_CURRENT_USER_REQUESTED, getCurrentUser);
};

const watchLoginUser = function* () {
  yield takeLatest(userActionTypes.LOGIN_USER_REQUESTED, loginUser);
};

export { watchGetCurrentUser, watchLoginUser };
