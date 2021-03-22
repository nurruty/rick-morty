import { paginationActionTypes } from '../actions/pagination';

const paginationReducer = (state = {}, { type, payload }) => {
  if (type === paginationActionTypes.RECEIVE_PAGE) {
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

  return state;
};

export default paginationReducer;
