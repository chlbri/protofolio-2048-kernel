import { ttest } from '@bemedev/test';
import { cards1 } from '../helpers/setupTests';
import { _moveLeft } from './left';
import { compare, createBoardTest } from './setupTests';

describe('Move Left', () => {
  // #region Board Tests
  const test1 = createBoardTest(
    cards1,
    [
      16,
      8,
      2,
      undefined,
      8,
      2,
      undefined,
      undefined,
      8,
      4,
      8,
      undefined,
      2,
      4,
      undefined,
      undefined,
    ],
  );

  // #endregion
  ttest({
    func: _moveLeft,
    tests: [test1],
    compare,
  });
});
