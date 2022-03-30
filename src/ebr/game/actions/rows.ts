import type { TypeOf } from 'zod';
import { object } from 'zod';
import { moveArraySchema } from './moveArray';

export const rowsSchema = object({
  row1: moveArraySchema,
  row2: moveArraySchema,
  row3: moveArraySchema,
  row4: moveArraySchema,
});

export type Rows = TypeOf<typeof rowsSchema>;
