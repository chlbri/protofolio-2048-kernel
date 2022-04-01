import { TContext } from '../../../ebr';

export function canMoveDown(ctx: TContext): boolean {
  return ctx.back.game.possibleMoves.down;
}