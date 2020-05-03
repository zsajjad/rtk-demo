/*
 *
 * HackerNewsArticles reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  data: [],
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const hackerNewsArticlesReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.FETCH:
        draft.loading = true;
        break;
      case constants.FETCH_SUCCESS:
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      case constants.FETCH_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        break;
    }
  });

export default hackerNewsArticlesReducer;
