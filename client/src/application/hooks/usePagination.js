import { useSelector } from 'react-redux';
import { paginationActionsCreators } from '../../domain/actions/pagination';
import { selectPagination } from '../../domain/selectors/pagination';
import useBindActionCreators from './useBindActionCreators';
import { useRouter } from './useRouter';

const usePagination = () => {
  const paginationActions = useBindActionCreators(paginationActionsCreators);
  const pagination = useSelector(selectPagination) || {};
  const { push } = useRouter();

  const goToPage = (page, entity) => {
    console.log('🚀 ~ file: usePagination.js ~ line 13 ~ goToPage ~ page', page);
    push(`?page=${page}`);
    paginationActions.requestPage(page, entity);
  };

  const actualPage = (entity) => {
    const entityPagination = pagination[entity] || {};
    return entityPagination.currentPage;
  };

  return {
    actualPage,
    goToPage,
  };
};

export default usePagination;
