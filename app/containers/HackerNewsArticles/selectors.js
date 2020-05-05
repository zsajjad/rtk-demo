import { createSelector } from 'reselect';
import { name, initialState } from './slice';

/**
 * Direct selector to the hackerNewsArticles state domain
 */

const selectHackerNewsArticlesDomain = (state) => state[name] || initialState;

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
