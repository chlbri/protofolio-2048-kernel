import { assign } from '@xstate/immer';
import { Cards } from '../../../../ebr';
import type { TContext } from '../../../../ebr/context';
import { Cols } from '../../../../ebr/game/actions/columns';
import { groupByColumns, mergeColumnsToCards } from '../helpers';
import { moveArray } from '../helpers/moveArray';

export function _moveDown(ctx: TContext): Cards {
  const _columns = groupByColumns(ctx);

  const col1 = moveArray(_columns.col1);
  const col2 = moveArray(_columns.col2);
  const col3 = moveArray(_columns.col3);
  const col4 = moveArray(_columns.col4);

  const columns: Cols = {
    col1,
    col2,
    col3,
    col4,
  };

  const cards = mergeColumnsToCards(columns);

  return cards;
}

export const moveDown = assign<TContext, never>(ctx => {
  ctx.back.game.cards = _moveDown(ctx);
});
