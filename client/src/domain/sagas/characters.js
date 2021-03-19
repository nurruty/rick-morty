import { charactersActionTypes } from '../actions/characters';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getCharactersService } from '../services/characters';

function* getCharacters() {
  try {
    const characters = yield call(getCharactersService);
    yield put({ type: charactersActionTypes.GET_CHARACTERS_SUCCEDED, payload: { characters } });
  } catch (e) {
    yield put({ type: charactersActionTypes.GET_CHARACTERS_FAILED, payload: { error: e } });
  }
}

const watchGetCharacters = function* () {
  yield takeLatest(charactersActionTypes.GET_CHARACTERS_REQUESTED, getCharacters);
};

export { watchGetCharacters };
