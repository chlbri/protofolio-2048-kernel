import { TContext } from '../../../ebr';

export * from './down';
export * from './left';
export * from './right';
export * from './up';

export function canMove(ctx: TContext) {
  const out = ctx.back.game.possibleMoves;
  return out.up || out.down || out.left || out.right;
}
