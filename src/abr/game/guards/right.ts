import { TContext } from '../../../ebr';

export function canMoveRight(ctx: TContext): boolean {
  return ctx.back.game.possibleMoves.right;
}
