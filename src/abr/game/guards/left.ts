import { TContext } from '../../../ebr';

export function canMoveLeft(ctx: TContext): boolean {
  return ctx.back.game.possibleMoves.left;
}