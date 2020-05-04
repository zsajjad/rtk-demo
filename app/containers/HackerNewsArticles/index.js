/**
 *
 * HackerNewsArticles
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import makeSelectHackerNewsArticles from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetch } from './actions';
import { STORE_KEY } from './constants';

export function useHackerNewsArticles({ limit = 20, offset = 0 } = {}) {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const dispatch = useDispatch();
  const store = useSelector(makeSelectHackerNewsArticles());

  useEffect(() => {
    if (!store?.data?.length && !store?.loading) {
      dispatch(
        fetch({
          offset,
          limit,
        }),
      );
    }
  }, []);

  return store;
}

export function HackerNewsArticles({ children, ...props }) {
  const store = useHackerNewsArticles(props);
  return children(store);
}

HackerNewsArticles.propTypes = {
  children: PropTypes.func.isRequired,
  limit: PropTypes.number,
  offset: PropTypes.number,
};

export default React.memo(HackerNewsArticles);
