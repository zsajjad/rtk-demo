/**
 *
 * Asynchronously loads the component for HackerNewsArticles
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
