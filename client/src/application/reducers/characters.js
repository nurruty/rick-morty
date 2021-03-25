import { charactersActionTypes } from '../actions/characters';

const charactersInitialState = {
  charactersLoading: false,
  characters: {},
  charactersEerror: null,
};

const charactersReducer = (state = charactersInitialState, { type, payload = {} }) => {
  switch (type) {
    case charactersActionTypes.GET_CHARACTERS_REQUESTED:
    case charactersActionTypes.GET_CHARACTER_REQUESTED:
    case charactersActionTypes.ADD_FAVOURITE_CHARACTER_REQUESTED:
    case charactersActionTypes.DELETE_FAVOURITE_CHARACTER_REQUESTED:
      return {
        ...state,
        charactersLoading: true,
      };

    case charactersActionTypes.GET_CHARACTERS_SUCCEDED: {
      const { characters: prevCharacters } = state;
      const { characters = [] } = payload;
      return {
        ...state,
        charactersLoading: false,
        characters: characters.reduce((chs, ch) => {
          return {
            ...prevCharacters,
            ...chs,
            [ch.id]: ch,
          };
        }, {}),
      };
    }

    case charactersActionTypes.ADD_FAVOURITE_CHARACTER_SUCCEDED:
    case charactersActionTypes.DELETE_FAVOURITE_CHARACTER_SUCCEDED:
    case charactersActionTypes.GET_CHARACTER_SUCCEDED: {
      const { character = {} } = payload;
      const { characters = {} } = state;
      return {
        ...state,
        charactersLoading: false,
        characters: {
          ...characters,
          [character.id]: character,
        },
      };
    }

    case charactersActionTypes.GET_CHARACTERS_FAILED:
    case charactersActionTypes.GET_CHARACTER_FAILED:
    case charactersActionTypes.ADD_FAVOURITE_CHARACTER_FAILED:
    case charactersActionTypes.DELETE_FAVOURITE_CHARACTER_FAILED: {
      const { error = {} } = payload;
      return {
        ...state,
        charactersLoading: false,
        charactersError: error,
      };
    }

    default:
      return state;
  }
};

export default charactersReducer;
export { charactersInitialState };
