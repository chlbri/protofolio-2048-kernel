import { TContext } from '../../../ebr';

export function canMoveUp(ctx: TContext): boolean {
  return ctx.back.game.possibleMoves.up;
}