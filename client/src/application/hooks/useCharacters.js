import { useSelector } from 'react-redux';
import { useRouter } from './useRouter';
import { useEffect } from 'react';
import { charactersActionsCreators } from '../../domain/actions/characters';
import { selectCharacters } from '../../domain/selectors/characters';
import useBindActionCreators from './useBindActionCreators';
import usePagination from './usePagination';

const useCharacter = () => {
  const charactersActions = useBindActionCreators(charactersActionsCreators);
  const { query = {} } = useRouter();
  const { characterId } = query;
  const { characters = {}, character, charactersLoading = false, charactersError } = useSelector(
    selectCharacters(characterId)
  );

  const { actualPage } = usePagination('characters');
  const numCharacters = Object.values(characters).length;
  const { actualPageId } = actualPage();

  const updateFavouriteCharacter = (favCharacter) => {
    !favCharacter.isFavourite
      ? charactersActions.addFavouriteCharacterRequested(favCharacter)
      : charactersActions.deleteFavouriteCharacterRequested(favCharacter);
  };

  useEffect(() => {
    characterId
      ? charactersActions.getCharacterRequested(characterId)
      : numCharacters === 0 && charactersActions.getCharactersRequested(actualPageId);
  }, [charactersActions, characterId, numCharacters, actualPageId]);

  return {
    characters: Object.values(characters),
    character,
    charactersLoading,
    charactersError,
    updateFavouriteCharacter,
  };
};

export default useCharacter;
