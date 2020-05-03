import { fetch } from '../actions';
import { FETCH } from '../constants';

describe('HackerNewsArticles actions', () => {
  describe('Default Action', () => {
    it('has a type of FETCH', () => {
      const expected = {
        type: FETCH,
      };
      expect(fetch()).toEqual(expected);
    });
  });
});
