import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const useBindActionCreators = actions => {
  const dispatch = useDispatch();

  return React.useMemo(() => {
    return bindActionCreators(actions, dispatch);
  }, [actions, dispatch]);
};

export default useBindActionCreators;
