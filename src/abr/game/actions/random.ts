import { assign } from '@xstate/immer';
import type { TContext } from '../../../ebr/context';
import { getEmptyPlaces } from './helpers/getEmptyPlaces';

export function nextNumber() {
  const rand = Math.random();
  return rand < 0.7 ? 2 : 4;
}

export const _addRandomNumber = (ctx: TContext) => {
  const emptyPlaces = getEmptyPlaces(ctx);
  if (emptyPlaces.length < 1) return ctx;
  const rand = Math.floor(Math.random() * (emptyPlaces.length - 1));
  ctx.back.game.cards[emptyPlaces[rand]] = nextNumber();
};

export const addRandomNumber = assign<TContext, any>(ctx => {
  _addRandomNumber(ctx);
});
