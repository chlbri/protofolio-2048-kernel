import { object } from 'zod';
import { cardsSchema } from './card';
import { scoreSchema } from './score';
import { statisticsSchema } from './statistics';

export * from './card';
export * from './score';

export const gameSchema = object({
  cards: cardsSchema,
  score: scoreSchema,
  statitics: statisticsSchema,
});
