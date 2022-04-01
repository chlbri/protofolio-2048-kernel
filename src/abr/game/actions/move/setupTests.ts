import type { Cards } from '../../../../ebr';

export function createBoardTest(actual: Cards, expected: Cards) {
  return {
    args: {
      back: {
        game: {
          cards: actual,
          score: 0,
        },
      },
    },
    expected: {
      back: {
        game: {
          cards: expected,
          score: 0,
        },
      },
    },
  };
}

export const compare = (arg1: any, arg2: any) => {
  return JSON.stringify(arg1) === JSON.stringify(arg2);
};
