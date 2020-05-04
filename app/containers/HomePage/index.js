/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useHackerNewsArticles } from 'containers/HackerNewsArticles';
import messages from './messages';

export default function HomePage() {
  const hackerNews = useHackerNewsArticles();

  if (hackerNews.loading) {
    return 'loading...';
  }

  if (hackerNews.error) {
    return 'Something went wrong';
  }

  return (
    <>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <p>{JSON.stringify(hackerNews?.data)}</p>
    </>
  );
}
