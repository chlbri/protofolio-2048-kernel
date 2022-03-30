import { Context } from '../../ebr/context';
import { cards } from './cards';

export const context: Context = {
  back: {
    game: {
      cards,
      score: 0,
    },
  },
};
