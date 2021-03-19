import React, { useCallback } from 'react';
import useCharacters from '../../hooks/useCharacters';

const HomePage = () => {
  const [chracters] = useCharacters();

  return <div style={{ position: 'relative', top: '50px' }}>HOLA HomePage</div>;
};

export default HomePage;
