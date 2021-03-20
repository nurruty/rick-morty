import { charactersActionTypes } from '../actions/characters';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getCharactersService,
  getCharacterService,
  addFavouriteCharacterService,
  deleteFavouriteCharacterService,
} from '../services/characters';

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

function* addFavouriteCharacter({ payload }) {
  const characterId = payload;
  try {
    const character = yield call(addFavouriteCharacterService, { characterId });
    yield put({ type: charactersActionTypes.ADD_FAVOURITE_CHARACTER_SUCCEDED, payload: { character } });
  } catch (e) {
    yield put({ type: charactersActionTypes.ADD_FAVOURITE_CHARACTER_FAILED, payload: { error: e } });
  }
}

function* deleteFavouriteCharacter({ payload }) {
  const characterId = payload;
  try {
    const character = yield call(deleteFavouriteCharacterService, { characterId });
    yield put({ type: charactersActionTypes.DELETE_FAVOURITE_CHARACTER_SUCCEDED, payload: { character } });
  } catch (e) {
    yield put({ type: charactersActionTypes.DELETE_FAVOURITE_CHARACTER_FAILED, payload: { error: e } });
  }
}

const watchGetCharacters = function* () {
  yield takeLatest(charactersActionTypes.GET_CHARACTERS_REQUESTED, getCharacters);
};

const watchGetCharacter = function* () {
  yield takeLatest(charactersActionTypes.GET_CHARACTER_REQUESTED, getCharacter);
};

const watchAddFavouriteCharacter = function* () {
  yield takeLatest(charactersActionTypes.ADD_FAVOURITE_CHARACTER_REQUESTED, addFavouriteCharacter);
};

const watchDeleteFavouriteCharacter = function* () {
  yield takeLatest(charactersActionTypes.DELETE_FAVOURITE_CHARACTER_REQUESTED, deleteFavouriteCharacter);
};

export { watchGetCharacters, watchGetCharacter, watchAddFavouriteCharacter, watchDeleteFavouriteCharacter };
