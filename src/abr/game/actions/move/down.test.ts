import { ttest } from '@bemedev/test';
import { moveDown } from './down';
import { compare, createBoardTest } from './setupTests';

describe('Move Down', () => {
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
    func: moveDown,
    tests: [test1],
    compare,
  });
});
