import { userActionTypes } from '../actions/user';
import { call, put, takeLatest } from 'redux-saga/effects';
import { createError } from '../../domain/entities/error';
import { createUser } from '../../domain/entities/user';

function* getCurrentUser({ getCurrentUserService }) {
  try {
    const data = yield call(getCurrentUserService);

    yield put({ type: userActionTypes.GET_CURRENT_USER_SUCCEDED, payload: { user: createUser(data) } });
  } catch (e) {
    yield put({ type: userActionTypes.GET_CURRENT_USER_FAILED, payload: { error: createError(e) } });
  }
}

function* loginUser({ payload, loginUserService }) {
  const { email, password, push } = payload;
  try {
    const user = yield call(loginUserService, { email, password });
    yield put({ type: userActionTypes.LOGIN_USER_SUCCEDED, payload: { user: createUser(user) } });
    push('/');
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

export { getCurrentUser, loginUser };
export { watchGetCurrentUser, watchLoginUser };
