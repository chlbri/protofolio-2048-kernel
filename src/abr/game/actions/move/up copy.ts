import { assign } from '@xstate/immer';
import type { TContext } from '../../../../ebr/context';
import { Cols } from '../../../../ebr/game/actions/columns';
import { groupByColumns, mergeColumnsToCards } from '../helpers';
import { inverseMoveArray } from '../helpers/inverseMoveArray';
import { moveArray } from '../helpers/moveArray';

export const moveUp = assign<TContext, never>(ctx => {
  const _columns = groupByColumns(ctx);
  const col1 = inverseMoveArray(
    moveArray(inverseMoveArray(_columns.col1)),
  );
  const col2 = inverseMoveArray(
    moveArray(inverseMoveArray(_columns.col2)),
  );
  const col3 = inverseMoveArray(
    moveArray(inverseMoveArray(_columns.col3)),
  );
  const col4 = inverseMoveArray(
    moveArray(inverseMoveArray(_columns.col4)),
  );

  const columns: Cols = {
    col1,
    col2,
    col3,
    col4,
  };

  const cards = mergeColumnsToCards(columns);
  console.log('OK =>', cards);

  ctx.back.game.cards = cards;
});
