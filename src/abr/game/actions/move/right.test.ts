import { ttest } from '@bemedev/test';
import { _moveRight } from './right';
import { compare, createBoardTest } from './setupTests';

describe('Move Right', () => {
  // #region Board Tests
  const test1 = createBoardTest(
    [
      16,
      4,
      4,
      2,
      8,
      undefined,
      undefined,
      2,
      8,
      undefined,
      4,
      8,
      2,
      4,
      undefined,
      undefined,
    ],
    [
      undefined,
      16,
      8,
      2,
      undefined,
      undefined,
      8,
      2,
      undefined,
      8,
      4,
      8,
      undefined,
      undefined,
      2,
      4,
    ],
  );

  // #endregion
  ttest({
    func: _moveRight,
    tests: [test1],
    compare,
  });
});
