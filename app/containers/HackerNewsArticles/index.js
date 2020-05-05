/**
 *
 * HackerNewsArticles
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import makeSelectHackerNewsArticles from './selectors';
import saga from './saga';
import { name, reducer, actions } from './slice';

export function useHackerNewsArticles({ limit = 20, offset = 0 } = {}) {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga });

  const dispatch = useDispatch();
  const store = useSelector(makeSelectHackerNewsArticles(), shallowEqual);

  useEffect(() => {
    if (!store?.data?.length && !store?.loading) {
      dispatch(
        actions.fetch({
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
