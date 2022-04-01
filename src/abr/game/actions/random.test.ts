import { ttest } from '@bemedev/test';
import { TContext } from '../../../ebr';
import { getEmptyPlaces } from './helpers/getEmptyPlaces';
import { cards1 } from './helpers/setupTests';
import { _addRandomNumber } from './random';

describe('addRandomNumber', () => {
  const ctx1: TContext = {
    back: {
      game: {
        cards: cards1,
        score: 0,
      },
    },
    iterator: 0,
  };

  ttest({
    func: _addRandomNumber,
    tests: [
      {
        args: ctx1,
      },
    ],
    compare: () => getEmptyPlaces(ctx1).length === 4,
  });
});
