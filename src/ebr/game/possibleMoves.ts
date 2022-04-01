import { boolean, object, TypeOf } from 'zod';

export const possibleMovesSchema = object({
  left: boolean(),
  right: boolean(),
  up: boolean(),
  down: boolean(),
});

export type PossibleMoves = TypeOf<typeof possibleMovesSchema>;
