const paginationActionTypes = {
  RECEIVE_PAGE: 'RECEIVE_PAGE',
};

const paginationActions = {
  receivePage: (page, entity, results) => ({
    type: paginationActionTypes.RECEIVE_PAGE,
    payload: {
      page,
      entity,
      results,
    },
  }),
};

export { paginationActionTypes, paginationActions };
