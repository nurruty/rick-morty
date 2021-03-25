import { paginationActionsCreators } from '../../actions/pagination';
import paginationReducer, { paginationInitialState } from '../pagination';

describe('Pagination Reducers', () => {
  test('Initial State', () => {
    const state = paginationReducer(undefined, {});

    expect(state).toEqual(paginationInitialState);
  });

  test('Request', () => {
    const state = {};

    const newState = paginationReducer(state, paginationActionsCreators.requestPage(2, 'characters'));
    const newPage = {
      currentPage: 2,
    };

    expect(newState).toEqual({
      characters: newPage,
    });
  });

  test('Receive', () => {
    const state = {};

    const receivedData = [2, 'characters', [{ id: 1 }]];
    const newState = paginationReducer(state, paginationActionsCreators.receivePage(...receivedData));
    const newPage = {
      characters: {
        currentPage: 2,
        pages: {
          2: { ids: [1] },
        },
      },
    };

    expect(newState).toEqual(newPage);
  });
});
