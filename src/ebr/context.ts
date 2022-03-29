import type { TypeOf } from 'zod';
import { object } from 'zod';
import { gameSchema } from './game';

export const contextSchema = object({
  back: object({ game: gameSchema }),
});

export type Context = TypeOf<typeof contextSchema>;
