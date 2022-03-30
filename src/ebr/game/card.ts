import type { TypeOf } from 'zod';
import { number, tuple } from 'zod';

export const cardPropsSchema = number()
  .optional()
  .refine(arg => arg === undefined || (!(arg & (arg - 1)) && arg >= 2));

export type CardProps = TypeOf<typeof cardPropsSchema>;

export const cardsSchema = tuple([
  cardPropsSchema,
  cardPropsSchema,
  cardPropsSchema,
  cardPropsSchema,
  cardPropsSchema,
  cardPropsSchema,
  cardPropsSchema,
  cardPropsSchema,
  cardPropsSchema,
  cardPropsSchema,
  cardPropsSchema,
  cardPropsSchema,
  cardPropsSchema,
  cardPropsSchema,
  cardPropsSchema,
  cardPropsSchema,
]);

export type Cards = TypeOf<typeof cardsSchema>;
