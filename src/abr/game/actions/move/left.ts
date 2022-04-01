import { assign } from '@xstate/immer';
import { Cards } from '../../../../ebr';
import type { TContext } from '../../../../ebr/context';
import { Rows } from '../../../../ebr/game/actions/rows';
import { groupByRows, mergeRowsToCards } from '../helpers';
import { inverseMoveArray } from '../helpers/inverseMoveArray';
import { moveArray } from '../helpers/moveArray';

export function _moveLeft(ctx: TContext): Cards {
  const _rows = groupByRows(ctx);

  const row1 = inverseMoveArray(moveArray(inverseMoveArray(_rows.row1)));
  const row2 = inverseMoveArray(moveArray(inverseMoveArray(_rows.row2)));
  const row3 = inverseMoveArray(moveArray(inverseMoveArray(_rows.row3)));
  const row4 = inverseMoveArray(moveArray(inverseMoveArray(_rows.row4)));

  const rows: Rows = {
    row1,
    row2,
    row3,
    row4,
  };

  const cards = mergeRowsToCards(rows);
  console.log('OK =>', cards);

  return cards;
}

export const moveLeft = assign<TContext, never>(ctx => {
  ctx.back.game.cards = _moveLeft(ctx);
});
