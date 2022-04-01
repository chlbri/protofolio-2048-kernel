import { TContext } from '../../ebr/context';
import { cards } from './cards';

export const context: TContext = {
  back: {
    game: {
      cards,
      score: 0,
    },
  },
  iterator: 0,
};
