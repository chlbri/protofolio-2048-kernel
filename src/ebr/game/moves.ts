import type { TypeOf } from 'zod';
import { number } from 'zod';

export const movesSchema = number();
export type Moves = TypeOf<typeof movesSchema>;
