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
  const hackerNewsArticles = useHackerNewsArticles();
  console.log({ hackerNewsArticles });
  return (
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
  );
}
