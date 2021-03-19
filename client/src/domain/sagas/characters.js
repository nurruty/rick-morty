import { charactersActionTypes } from '../actions/characters';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getCharactersService, getCharacterService } from '../services/characters';

function* getCharacters() {
  try {
    const characters = yield call(getCharactersService);
    yield put({ type: charactersActionTypes.GET_CHARACTERS_SUCCEDED, payload: { characters } });
  } catch (e) {
    yield put({ type: charactersActionTypes.GET_CHARACTERS_FAILED, payload: { error: e } });
  }
}

function* getCharacter() {
  try {
    const character = yield call(getCharacterService);
    yield put({ type: charactersActionTypes.GET_CHARACTER_SUCCEDED, payload: { character } });
  } catch (e) {
    yield put({ type: charactersActionTypes.GET_CHARACTER_FAILED, payload: { error: e } });
  }
}

const watchGetCharacters = function* () {
  yield takeLatest(charactersActionTypes.GET_CHARACTERS_REQUESTED, getCharacters);
};

const watchGetCharacter = function* () {
  yield takeLatest(charactersActionTypes.GET_CHARACTER_REQUESTED, getCharacter);
};

export { watchGetCharacters, watchGetCharacter };
