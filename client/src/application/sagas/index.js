import { all } from 'redux-saga/effects';
import {
  watchGetCharacters,
  watchGetCharacter,
  watchAddFavouriteCharacter,
  watchDeleteFavouriteCharacter,
} from './characters';
import { watchGetCurrentUser, watchLoginUser } from './user';

const sagas = function* () {
  yield all([
    watchGetCurrentUser(),
    watchGetCharacters(),
    watchGetCharacter(),
    watchLoginUser(),
    watchAddFavouriteCharacter(),
    watchDeleteFavouriteCharacter(),
  ]);
};

export default sagas;
