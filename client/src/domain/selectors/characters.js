import { selectCharactersPagination } from './pagination';

const charactersSelector = (state) => {
  const { charactersState = {} } = state;
  const { currentPage, pages = {} } = selectCharactersPagination(state);
  const { characters, charactersLoading, charactersError } = charactersState;
  const { ids = [] } = pages[currentPage] || {};

  let pageCharacters = {};
  if (pages[currentPage]) {
    const filter = Object.keys(characters).filter((key) => {
      return ids.includes(parseInt(key));
    });
    pageCharacters = filter.reduce((obj, key) => {
      return {
        ...obj,
        [key]: characters[key],
      };
    }, {});
  } else {
    pageCharacters = characters;
  }

  return { characters: pageCharacters, charactersLoading, charactersError };
};

export default charactersSelector;
