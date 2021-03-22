import { useSelector } from 'react-redux';
import { useRouter } from './useRouter';
import { useEffect } from 'react';
import { charactersActionsCreators } from '../../domain/actions/characters';
import charactersSelector from '../../domain/selectors/characters';
import useBindActionCreators from './useBindActionCreators';
import { selectCharactersPagination } from '../../domain/selectors/pagination';

const useCharacter = () => {
  const charactersActions = useBindActionCreators(charactersActionsCreators);
  const { characters = {}, charactersLoading = false, charactersError } = useSelector(charactersSelector);
  const { currentPage, pages = {} } = useSelector(selectCharactersPagination);
  const { query = {} } = useRouter();
  const { characterId, page = 1 } = query;
  const character = characters[characterId];
  const { ids = [] } = pages[page] || {};

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

  useEffect(() => {
    !character && characterId && !charactersLoading && charactersActions.getCharacterRequested(characterId);
  }, [character]);

  useEffect(() => {
    !characterId && !charactersLoading && ids.length === 0 && charactersActions.getCharactersRequested(page);
  }, [characterId, ids]);

  const updateFavouriteCharacter = (character) => {
    !character.isFavourite
      ? charactersActions.addFavouriteCharacterRequested(character)
      : charactersActions.deleteFavouriteCharacterRequested(character);
  };

  return {
    currentPage,
    characters: Object.values(pageCharacters),
    character,
    charactersError,
    updateFavouriteCharacter,
  };
};

export default useCharacter;
