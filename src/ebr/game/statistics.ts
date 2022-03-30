import type { TypeOf } from 'zod';
import { object } from 'zod';

export const statisticsSchema = object({}).optional();
export type Statistics = TypeOf<typeof statisticsSchema>;
