import { ttest } from '@bemedev/test';
import { getEmptyPlaces } from './getEmptyPlaces';
import { cards1, cards2 } from './setupTests';

describe('getEmptyPlaces', () => {
  ttest({
    func: getEmptyPlaces,
    tests: [
      {
        args: {
          back: {
            game: {
              cards: cards1,
              score: 0,
            },
          },
          iterator: 0,
        },
        expected: [5, 6, 9, 14, 15],
      },
      {
        args: {
          back: {
            game: {
              cards: cards2,
              score: 0,
            },
          },
          iterator: 0,
        },
        expected: [5, 9, 12, 14],
      },
    ],
  });
});
