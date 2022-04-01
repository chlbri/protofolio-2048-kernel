import { ttest } from '@bemedev/test';
import { compare, createBoardTest } from './setupTests';
import { moveUp } from './up';

describe('Move Up', () => {
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
    ],
  );

  // #endregion
  ttest({
    func: moveUp,
    tests: [test1],
    compare,
  });
});
