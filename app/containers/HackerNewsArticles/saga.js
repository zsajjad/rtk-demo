/**
 *
 * Saga for HackerNewsArticles
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import * as api from './api';

export const fetchSaga = function* fetch({ payload }) {
  try {
    const data = yield call(api.fetch, payload);
    yield put(actions.fetchSuccess(data));
  } catch (error) {
    yield put(actions.fetchFailure(error));
  }
};
// Individual exports for testing
export default function* hackerNewsArticlesSaga() {
  yield takeEvery(constants.FETCH, fetchSaga);
}
