import React, { useCallback } from 'react';
import useCharacters from '../../hooks/useCharacters';

const Character = () => {
  const [characters] = useCharacters();
};

export default Character;
