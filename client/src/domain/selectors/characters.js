import { selectCharactersPagination } from './pagination';

const selectCharacters = (characterId) => (state) => {
  const { charactersState = {} } = state;
  const { currentPage, pages = {} } = selectCharactersPagination(state);
  const { characters, charactersLoading, charactersError } = charactersState;
  const { ids = [] } = pages[currentPage] || {};

  return {
    // Get characters from current page
    characters: pages[currentPage]
      ? Object.keys(characters)
          .filter((key) => {
            return ids.includes(parseInt(key));
          })
          .reduce((obj, key) => {
            return {
              ...obj,
              [key]: characters[key],
            };
          }, {})
      : undefined,
    // Get detailed character
    character: characters[characterId],
    charactersLoading,
    charactersError,
  };
};

export { selectCharacters };
