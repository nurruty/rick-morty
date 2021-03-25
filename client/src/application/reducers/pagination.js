import { paginationActionTypes } from '../actions/pagination';

const paginationInitialState = {};

const paginationReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case paginationActionTypes.REQUEST_PAGE: {
      const { page = 1, entity } = payload;
      const entityPages = state[entity] || {};
      return {
        ...state,
        [entity]: {
          ...entityPages,
          currentPage: page,
        },
      };
    }
    case paginationActionTypes.RECEIVE_PAGE: {
      const { page = 1, entity, results } = payload;
      const entityPages = state[entity] || {};
      const { pages = 1 } = entityPages;

      return {
        ...state,
        [entity]: {
          currentPage: page,
          pages: {
            ...pages,
            [page]: {
              ids: results.map((r) => r.id),
            },
          },
        },
      };
    }
    default:
      return state;
  }
};

export default paginationReducer;
export { paginationInitialState };
