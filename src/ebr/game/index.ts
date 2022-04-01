import { object } from 'zod';
import { cardsSchema } from './card';
import { movesSchema } from './MOVES';
import { scoreSchema } from './score';
import { statisticsSchema } from './statistics';
import { possibleMovesSchema } from './possibleMoves';

export * from './card';
export * from './score';

export const gameSchema = object({
  cards: cardsSchema,
  score: scoreSchema,
  moves: movesSchema,
  statitics: statisticsSchema,
  possibleMoves: possibleMovesSchema
});
