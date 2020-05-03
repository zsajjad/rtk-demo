/*
 *
 * HackerNewsArticles actions
 *
 */

import * as constants from './constants';

export function fetch(payload) {
  return {
    type: constants.FETCH,
    payload,
  };
}
export function fetchSuccess(payload) {
  return {
    type: constants.FETCH_SUCCESS,
    payload,
  };
}
export function fetchFailure(payload) {
  return {
    type: constants.FETCH_FAILURE,
    payload,
  };
}
