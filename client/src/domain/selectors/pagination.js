const selectCharactersPagination = (state) => {
  const { pagination = {} } = state;

  return pagination['characters'] || {};
};

export { selectCharactersPagination };
