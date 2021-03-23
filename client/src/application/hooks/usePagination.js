import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { paginationActionsCreators } from '../../domain/actions/pagination';
import { selectPagination } from '../../domain/selectors/pagination';
import useBindActionCreators from './useBindActionCreators';
import { useRouter } from './useRouter';

const usePagination = (entity) => {
  const paginationActions = useBindActionCreators(paginationActionsCreators);
  const pagination = useSelector(selectPagination) || {};
  const { push, query } = useRouter();
  const { page = '1' } = query;
  const newPage = parseInt(page);
  const [prevPage, setPrevPage] = useState();

  const goToPage = (pageTo) => {
    push(`?page=${pageTo}`);
  };

  useEffect(() => {
    entity && paginationActions.requestPage(newPage, entity);
  }, [newPage, prevPage, paginationActions, setPrevPage, entity]);

  const actualPage = () => {
    const entityPagination = pagination[entity] || {};
    return {
      pageHasChanged: prevPage !== entityPagination.currentPage,
      actualPageId: entityPagination.currentPage,
    };
  };

  return {
    actualPage,
    goToPage,
  };
};

export default usePagination;
