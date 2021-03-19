const charactersSelector = (state) => {
  const { charactersState = {} } = state;
  const { characters, charactersLoading, charactersError } = charactersState;

  return { characters, charactersLoading, charactersError };
};

export default charactersSelector;
