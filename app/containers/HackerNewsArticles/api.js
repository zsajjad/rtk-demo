/**
 *
 * API for HackerNewsArticles
 *
 */

import request from 'utils/request';

export function fetch() {
  const requestURL = `https://hacker-news.firebaseio.com/v0/user/zsajjad.json?print=pretty`;
  return request(requestURL);
}
