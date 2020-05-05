/**
 *
 * Saga for HackerNewsArticles
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';
import { actions } from './slice';
import * as api from './api';

export function* fetchArticles({ payload }) {
  try {
    const data = yield call(api.fetch, payload);
    yield put(actions.fetchSuccess({ data }));
  } catch (error) {
    yield put(actions.fetchFailure({ error }));
  }
}
// Individual exports for testing
export default function* hackerNewsArticlesSaga() {
  yield takeEvery(actions.fetch.type, fetchArticles);
}
