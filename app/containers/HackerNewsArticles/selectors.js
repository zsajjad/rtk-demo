import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { STORE_KEY } from './constants';

/**
 * Direct selector to the hackerNewsArticles state domain
 */

const selectHackerNewsArticlesDomain = (state) =>
  state[STORE_KEY] || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HackerNewsArticles
 */

const makeSelectHackerNewsArticles = () =>
  createSelector(selectHackerNewsArticlesDomain, (substate) => substate);

export default makeSelectHackerNewsArticles;
export { selectHackerNewsArticlesDomain };
