const charactersActionTypes = {
  GET_CHARACTERS_REQUESTED: 'GET_CHARACTERS_REQUESTED',
  GET_CHARACTERS_SUCCEDED: 'GET_CHARACTERS_SUCCEDED',
  GET_CHARACTERS_FAILED: 'GET_CHARACTERS_FAILED',

  GET_CHARACTER_REQUESTED: 'GET_CHARACTER_REQUESTED',
  GET_CHARACTER_SUCCEDED: 'GET_CHARACTER_SUCCEDED',
  GET_CHARACTER_FAILED: 'GET_CHARACTER_FAILED',

  ADD_FAVOURITE_CHARACTER_REQUESTED: 'ADD_FAVOURITE_CHARACTER_REQUESTED',
  ADD_FAVOURITE_CHARACTER_SUCCEDED: 'ADD_FAVOURITE_CHARACTER_SUCCEDED',
  ADD_FAVOURITE_CHARACTER_FAILED: 'ADD_FAVOURITE_CHARACTER_FAILED',

  DELETE_FAVOURITE_CHARACTER_REQUESTED: 'DELETE_FAVOURITE_CHARACTER_REQUESTED',
  DELETE_FAVOURITE_CHARACTER_SUCCEDED: 'DELETE_FAVOURITE_CHARACTER_SUCCEDED',
  DELETE_FAVOURITE_CHARACTER_FAILED: 'DELETE_FAVOURITE_CHARACTER_FAILED',
};

const charactersActionsCreators = {
  getCharactersRequested: () => ({
    type: charactersActionTypes.GET_CHARACTERS_REQUESTED,
  }),
  getCharactersSucceded: (data) => ({
    type: charactersActionTypes.GET_CHARACTERS_SUCCEDED,
    payload: data,
  }),
  getCharactersFailed: (error) => ({
    type: charactersActionTypes.GET_CHARACTERS_FAILED,
    payload: error,
  }),

  getCharacterRequested: (characterId) => ({
    type: charactersActionTypes.GET_CHARACTER_REQUESTED,
    payload: characterId,
  }),
  getCharacterSucceded: (data) => ({
    type: charactersActionTypes.GET_CHARACTER_SUCCEDED,
    payload: data,
  }),
  getCharacterFailed: (error) => ({
    type: charactersActionTypes.GET_CHARACTER_FAILED,
    payload: error,
  }),

  addFavouriteCharacterRequested: (character = {}) => ({
    type: charactersActionTypes.ADD_FAVOURITE_CHARACTER_REQUESTED,
    payload: character,
  }),
  addFavouriteCharacterSucceded: (data) => ({
    type: charactersActionTypes.ADD_FAVOURITE_CHARACTER_SUCCEDED,
    payload: data,
  }),
  addFavouriteCharacterFailed: (error) => ({
    type: charactersActionTypes.ADD_FAVOURITE_CHARACTER_FAILED,
    payload: error,
  }),

  deleteFavouriteCharacterRequested: (character = {}) => ({
    type: charactersActionTypes.DELETE_FAVOURITE_CHARACTER_REQUESTED,
    payload: character,
  }),
  deleteFavouriteCharacterSucceded: (data) => ({
    type: charactersActionTypes.DELETE_FAVOURITE_CHARACTER_SUCCEDED,
    payload: data,
  }),
  deleteFavouriteCharacterFailed: (error) => ({
    type: charactersActionTypes.DELETE_FAVOURITE_CHARACTER_FAILED,
    payload: error,
  }),
};

export { charactersActionTypes, charactersActionsCreators };
