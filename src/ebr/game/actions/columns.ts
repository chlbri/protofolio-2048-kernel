
import type { TypeOf } from 'zod';
import { object } from 'zod';
import { moveArraySchema } from './moveArray';

export const colsSchema = object({
  col1: moveArraySchema,
  col2: moveArraySchema,
  col3: moveArraySchema,
  col4: moveArraySchema,
});

export type Cols = TypeOf<typeof colsSchema>;