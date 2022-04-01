import { ttest } from '@bemedev/test';
import { cards1 } from '../helpers/setupTests';
import { compare, createBoardTest } from './setupTests';
import { _moveUp } from './up';

describe('Move Up', () => {
  // #region Board Tests
  const test1 = createBoardTest(cards1, [
    16,
    8,
    8,
    4,
    16,
    undefined,
    undefined,
    8,
    2,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  // #endregion
  ttest({
    func: _moveUp,
    tests: [test1],
    compare,
  });
});
