import { useSelector } from 'react-redux';
import { useRouter } from './useRouter';
import { useEffect } from 'react';
import { charactersActionsCreators } from '../../domain/actions/characters';
import charactersSelector from '../../domain/selectors/characters';
import useBindActionCreators from './useBindActionCreators';

const useCharacter = () => {
  const charactersActions = useBindActionCreators(charactersActionsCreators);
  const { characters = {}, charactersLoading = false, charactersError } = useSelector(charactersSelector);
  const { query = {} } = useRouter();
  const { characterId } = query;

  const character = characters[characterId];

  useEffect(() => {
    !character && !charactersLoading && charactersActions.getCharacterRequested(characterId);
  }, [character]);

  return { character };
};

export default useCharacter;
