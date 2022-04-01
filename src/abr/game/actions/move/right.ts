import { assign } from '@xstate/immer';
import { Cards } from '../../../../ebr';
import type { TContext } from '../../../../ebr/context';
import { Rows } from '../../../../ebr/game/actions/rows';
import { groupByRows, mergeRowsToCards } from '../helpers';
import { boardHasChanged } from '../helpers/boardHasChanged';
import { moveArray } from '../helpers/moveArray';
import { _addRandomNumber } from '../random';

export function _moveRight(ctx: TContext): Cards {
  const _rows = groupByRows(ctx);

  const row1 = moveArray(_rows.row1);
  const row2 = moveArray(_rows.row2);
  const row3 = moveArray(_rows.row3);
  const row4 = moveArray(_rows.row4);

  const rows: Rows = {
    row1,
    row2,
    row3,
    row4,
  };

  const cards = mergeRowsToCards(rows);
  return cards;
}

export const moveRight = assign<TContext, never>(ctx => {
  ctx.back.game.cards = _moveRight(ctx);
});
