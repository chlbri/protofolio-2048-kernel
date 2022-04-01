import { serve } from '@bemedev/fstate';
import {
  MoveArray,
  moveArraySchema,
} from '../../../../ebr/game/actions/moveArray';
import { createF } from './createF';

export function moveArray(context: MoveArray) {
  const moveMachine = createF(moveArraySchema.parse(context));
  return serve(moveMachine)(undefined).value;
}
