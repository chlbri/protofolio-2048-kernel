import { ttest } from '@bemedev/test';
import { cards1 } from '../helpers/setupTests';
import { _moveDown } from './down';
import { compare, createBoardTest } from './setupTests';

describe('Move Down', () => {
  // #region Board Tests
  const test1 = createBoardTest(
    cards1,
    [
      undefined,
      undefined,
      undefined,
      undefined,
      16,
      undefined,
      undefined,
      undefined,
      16,
      undefined,
      undefined,
      4,
      2,
      8,
      8,
      8,
    ],
  );

  // #endregion
  ttest({
    func: _moveDown,
    tests: [test1],
    compare,
  });
});
