import { userActionTypes } from '../actions/user';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getCurrentUserService, loginUserService } from '../services/user';

function* getCurrentUser() {
  try {
    const user = yield call(getCurrentUserService);
    yield put({ type: userActionTypes.GET_CURRENT_USER_SUCCEDED, payload: { user } });
  } catch (e) {
    yield put({ type: userActionTypes.GET_CURRENT_USER_FAILED, payload: { error: e } });
  }
}

function* loginUser() {
  try {
    const user = yield call(loginUserService);
    yield put({ type: userActionTypes.LOGIN_USER_SUCCEDED, payload: { user } });
  } catch (e) {
    yield put({ type: userActionTypes.LOGIN_USER_FAILED, payload: { error: e } });
  }
}

const watchGetCurrentUser = function* () {
  yield takeLatest(userActionTypes.GET_CURRENT_USER_REQUESTED, getCurrentUser);
};

const watchLoginUser = function* () {
  yield takeLatest(userActionTypes.LOGIN_USER_REQUESTED, loginUser);
};

export { watchGetCurrentUser, watchLoginUser };
