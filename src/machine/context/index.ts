import { TContext } from '../../ebr/context';
import { cards } from './cards';
import { possibleMoves } from './possibleMoves';

export const context: TContext = {
  back: {
    game: {
      cards,
      score: 0,
      moves: 0,
      possibleMoves,
    },
  },
  iterator: 0,
};
