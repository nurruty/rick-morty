const selectPagination = (state) => state.pagination;

const selectCharactersPagination = (state) => {
  const { pagination = {} } = state;

  return pagination['characters'] || {};
};

export { selectPagination, selectCharactersPagination };
