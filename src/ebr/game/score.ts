import type { TypeOf } from 'zod';
import { number } from 'zod';

export const scoreSchema = number();
export type Score = TypeOf<typeof scoreSchema>;
