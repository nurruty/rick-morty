import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { charactersActionsCreators } from '../../domain/actions/characters';
import charactersSelector from '../../domain/selectors/characters';
import useBindActionCreators from './useBindActionCreators';

const useCharacters = () => {
  const { characters = {}, charactersLoading = false, charactersError } = useSelector(charactersSelector);
  const charactersActions = useBindActionCreators(charactersActionsCreators);

  const numCharacters = Object.values(characters).length;

  useEffect(() => {
    !numCharacters && !charactersLoading && charactersActions.getCharactersRequested();
  }, [numCharacters]);

  return [Object.values(characters)];
};

export default useCharacters;
