import { assign } from '@xstate/immer';
import { TContext } from '../../../ebr';
import { defaultCards } from './helpers';
import { boardHasChanged } from './helpers/boardHasChanged';
import { _moveDown } from './move/down';
import { _moveLeft } from './move/left';
import { _moveRight } from './move/right';
import { _moveUp } from './move/up';

export const inc = assign<TContext, any>(ctx => {
  ctx.iterator = ctx.iterator + 1;
});

export const incMove = assign<TContext, any>(ctx => {
  ctx.back.game.moves = ctx.back.game.moves + 1;
});

export const rinitGame = assign<TContext, never>(ctx => {
  ctx.back.game.cards = defaultCards;
});

export const assignPossibleMoves = assign<TContext, any>(ctx => {
  const cards = ctx.back.game.cards;
  const moveUpCards = _moveUp(ctx);
  const moveDownCards = _moveDown(ctx);
  const moveLeftCards = _moveLeft(ctx);
  const moveRightCards = _moveRight(ctx);
  ctx.back.game.possibleMoves = {
    left: boardHasChanged(cards, moveLeftCards),
    right: boardHasChanged(cards, moveRightCards),
    up: boardHasChanged(cards, moveUpCards),
    down: boardHasChanged(cards, moveDownCards),
  };
});
