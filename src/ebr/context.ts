import { number, object, TypeOf } from 'zod';
import { gameSchema } from './game';

export const contextSchema = object({
  back: object({ game: gameSchema }),
  iterator: number(),
});

export type TContext = TypeOf<typeof contextSchema>;
