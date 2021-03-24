const paginationActionTypes = {
  REQUEST_PAGE: 'REQUEST_PAGE',
  RECEIVE_PAGE: 'RECEIVE_PAGE',
};

const paginationActionsCreators = {
  requestPage: (page, entity) => ({
    type: paginationActionTypes.REQUEST_PAGE,
    payload: {
      page,
      entity,
    },
  }),
  receivePage: (page, entity, results) => ({
    type: paginationActionTypes.RECEIVE_PAGE,
    payload: {
      page,
      entity,
      results,
    },
  }),
};

export { paginationActionTypes, paginationActionsCreators };
