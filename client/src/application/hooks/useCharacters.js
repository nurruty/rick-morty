import { useSelector } from 'react-redux';
import { useRouter } from './useRouter';
import { useEffect } from 'react';
import { charactersActionsCreators } from '../../domain/actions/characters';
import charactersSelector from '../../domain/selectors/characters';
import useBindActionCreators from './useBindActionCreators';
import { userFavouriteCharactersSelector } from '../../domain/selectors/user';

const useCharacter = () => {
  const charactersActions = useBindActionCreators(charactersActionsCreators);
  const { characters = {}, charactersLoading = false, charactersError } = useSelector(charactersSelector);
  const { query = {} } = useRouter();
  const { characterId } = query;
  const character = characters[characterId];
  const favouriteCharacters = useSelector(userFavouriteCharactersSelector);

  useEffect(() => {
    !character && characterId && !charactersLoading && charactersActions.getCharacterRequested(characterId);
  }, [character]);

  useEffect(() => {
    !characterId && !charactersLoading && charactersActions.getCharactersRequested();
  }, [characterId]);

  const updateFavouriteCharacter = (id) => {
    favouriteCharacters.indexOf(id) === -1
      ? charactersActions.addFavouriteCharacterRequested(id)
      : charactersActions.deleteFavouriteCharacterRequested(id);
  };

  return { characters: Object.values(characters), character, charactersError, updateFavouriteCharacter };
};

export default useCharacter;
