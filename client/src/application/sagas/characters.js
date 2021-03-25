import { charactersActionTypes } from '../actions/characters';
import { call, put, takeLatest } from 'redux-saga/effects';
import { createError } from '../../domain/entities/error';
import { createCharacters, createCharacter, setFavouriteCharacter } from '../../domain/entities/character';
import { paginationActionsCreators } from '../actions/pagination';

function* getCharacters({ payload, getCharactersService }) {
  const page = payload;
  try {
    const characters = yield call(getCharactersService, { page });

    yield put({
      type: charactersActionTypes.GET_CHARACTERS_SUCCEDED,
      payload: { characters: createCharacters(characters) },
    });

    yield put(paginationActionsCreators.receivePage(page, 'characters', characters));
  } catch (e) {
    yield put({ type: charactersActionTypes.GET_CHARACTERS_FAILED, payload: { error: createError(e) } });
  }
}

function* getCharacter({ payload, getCharacterService }) {
  const characterId = payload;
  try {
    const character = yield call(getCharacterService, { characterId });
    yield put({
      type: charactersActionTypes.GET_CHARACTER_SUCCEDED,
      payload: { character: createCharacter(character) },
    });
  } catch (e) {
    yield put({ type: charactersActionTypes.GET_CHARACTER_FAILED, payload: { error: createError(e) } });
  }
}

function* addFavouriteCharacter({ payload, addFavouriteCharacterService }) {
  const character = payload;
  try {
    yield call(addFavouriteCharacterService, { characterId: character.id });
    yield put({
      type: charactersActionTypes.ADD_FAVOURITE_CHARACTER_SUCCEDED,
      payload: { character: setFavouriteCharacter(character, true) },
    });
  } catch (e) {
    yield put({
      type: charactersActionTypes.ADD_FAVOURITE_CHARACTER_FAILED,
      payload: { error: createError(e) },
    });
  }
}

function* deleteFavouriteCharacter({ payload, deleteFavouriteCharacterService }) {
  const character = payload;
  try {
    yield call(deleteFavouriteCharacterService, { characterId: character.id });
    yield put({
      type: charactersActionTypes.DELETE_FAVOURITE_CHARACTER_SUCCEDED,
      payload: { character: setFavouriteCharacter(character, false) },
    });
  } catch (e) {
    yield put({
      type: charactersActionTypes.DELETE_FAVOURITE_CHARACTER_FAILED,
      payload: { error: createError(e) },
    });
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

export { getCharacters, getCharacter, addFavouriteCharacter, deleteFavouriteCharacter };
export { watchGetCharacters, watchGetCharacter, watchAddFavouriteCharacter, watchDeleteFavouriteCharacter };
