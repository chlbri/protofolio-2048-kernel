import { ttest } from '@bemedev/test';
import { move } from './moveArray';

describe('Move', () => {
  ttest.concurrent({
    func: move,
    tests: [
      {
        args: { third: 2, fourth: 2 },
        expected: { fourth: 4 },
      },
      {
        args: { third: 6, fourth: 6 },
        throws: true,
      },
      {
        args: { third: 2, fourth: 8 },
        expected: { third: 2, fourth: 8 },
      },
      {
        args: { third: 2, fourth: 0 },
        throws: true,
      },
      {
        args: { third: 1, fourth: 8 },
        throws: true,
      },
      {
        args: { third: 2 },
        expected: { fourth: 2 },
      },
      {
        args: { third: 2, second: 2 },
        expected: { fourth: 4 },
      },
      {
        args: { third: 2, second: 2, fourth: 8 },
        expected: { third: 4, fourth: 8 },
      },
      {
        args: { third: 8, second: 2, fourth: 8 },
        expected: { third: 2, fourth: 16 },
      },
      {
        args: { second: 8, fourth: 8 },
        expected: { fourth: 16 },
      },
      {
        args: { second: 8 },
        expected: { fourth: 8 },
      },
      {
        args: { first: 8 },
        expected: { fourth: 8 },
      },
      {
        args: { first: 8, second: 8 },
        expected: { fourth: 16 },
      },
      {
        args: { first: 8, fourth: 8 },
        expected: { fourth: 16 },
      },
      {
        args: { first: 8, third: 8 },
        expected: { fourth: 16 },
      },
      {
        args: { first: 8, third: 8, fourth: 64 },
        expected: { third: 16, fourth: 64 },
      },
      {
        args: { first: 4, second: 8, third: 8, fourth: 64 },
        expected: { second: 4, third: 16, fourth: 64 },
      },
      {
        args: { first: 8, second: 8, third: 2, fourth: 2 },
        expected: { third: 16, fourth: 4 },
      },
      {
        args: { first: 16, second: 16, third: 4, fourth: 2 },
        expected: { second: 32, third: 4, fourth: 2 },
      },
      {
        args: { first: 2, second: 4, third: 8, fourth: 16 },
        expected: { first: 2, second: 4, third: 8, fourth: 16 },
      },
      {
        args: { first: 2, second: 2, third: 8, fourth: 16 },
        expected: { second: 4, third: 8, fourth: 16 },
      },
    ],
    compare: (arg1, arg2) => {
      console.log('Log =>', arg1);

      return JSON.stringify(arg1) === JSON.stringify(arg2);
    },
  });
});
