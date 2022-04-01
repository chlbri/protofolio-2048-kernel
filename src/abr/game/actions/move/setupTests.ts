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
    expected,
  };
}

export const compare = (arg1: Cards, arg2: any) => {
  return JSON.stringify(arg1) === JSON.stringify(arg2);
};
