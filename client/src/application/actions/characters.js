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
  getCharactersRequested: (page = 1) => ({
    type: charactersActionTypes.GET_CHARACTERS_REQUESTED,
    payload: page,
  }),
  getCharactersSucceded: (characters) => ({
    type: charactersActionTypes.GET_CHARACTERS_SUCCEDED,
    payload: { characters },
  }),
  getCharactersFailed: (error) => ({
    type: charactersActionTypes.GET_CHARACTERS_FAILED,
    payload: { error },
  }),

  getCharacterRequested: (characterId) => ({
    type: charactersActionTypes.GET_CHARACTER_REQUESTED,
    payload: characterId,
  }),
  getCharacterSucceded: (character) => ({
    type: charactersActionTypes.GET_CHARACTER_SUCCEDED,
    payload: { character },
  }),
  getCharacterFailed: (error) => ({
    type: charactersActionTypes.GET_CHARACTER_FAILED,
    payload: error,
  }),

  addFavouriteCharacterRequested: (character = {}) => ({
    type: charactersActionTypes.ADD_FAVOURITE_CHARACTER_REQUESTED,
    payload: character,
  }),
  addFavouriteCharacterSucceded: () => ({
    type: charactersActionTypes.ADD_FAVOURITE_CHARACTER_SUCCEDED,
  }),
  addFavouriteCharacterFailed: (error) => ({
    type: charactersActionTypes.ADD_FAVOURITE_CHARACTER_FAILED,
    payload: error,
  }),

  deleteFavouriteCharacterRequested: (character = {}) => ({
    type: charactersActionTypes.DELETE_FAVOURITE_CHARACTER_REQUESTED,
    payload: character,
  }),
  deleteFavouriteCharacterSucceded: () => ({
    type: charactersActionTypes.DELETE_FAVOURITE_CHARACTER_SUCCEDED,
  }),
  deleteFavouriteCharacterFailed: (error) => ({
    type: charactersActionTypes.DELETE_FAVOURITE_CHARACTER_FAILED,
    payload: error,
  }),
};

export { charactersActionTypes, charactersActionsCreators };
