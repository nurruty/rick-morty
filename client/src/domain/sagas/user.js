import { userActionTypes } from '../actions/user';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getCurrentUserService } from '../services/user';

function* getCurrentUser() {
  try {
    const songs = yield call(getCurrentUserService);
    yield put({ type: userActionTypes.GET_CURRENT_USER_SUCCEDED, payload: songs });
  } catch (e) {
    yield put({ type: userActionTypes.GET_CURRENT_USER_FAILED, payload: e.message });
  }
}

const watchGetCurrentUser = function* () {
  yield takeLatest(userActionTypes.GET_CURRENT_USER_REQUESTED, getCurrentUser);
};

export { watchGetCurrentUser };
