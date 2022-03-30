import type { TypeOf } from 'zod';
import { object } from 'zod';
import { cardPropsSchema } from '../card';

export const moveArraySchema = object({
  first: cardPropsSchema,
  second: cardPropsSchema,
  third: cardPropsSchema,
  fourth: cardPropsSchema,
}).required();

export type MoveArray = TypeOf<typeof moveArraySchema>;
