import { object } from 'zod';
import { cardsSchema } from './card';

export const gameSchema = object({
  cards: cardsSchema,
});
