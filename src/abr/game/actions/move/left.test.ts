import { ttest } from '@bemedev/test';
import { _moveLeft } from './left';
import { compare, createBoardTest } from './setupTests';

describe('Move Left', () => {
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
