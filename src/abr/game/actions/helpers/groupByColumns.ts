import type { Context } from '../../../../ebr/context';
import { colsSchema } from './../../../../ebr/game/actions/columns';

export function groupByColumns(ctx: Context) {
  const grid = ctx.back.game.cards;

  // #region COLUMNS
  const col1 = {
    first: grid[0],
    second: grid[4],
    third: grid[8],
    fourth: grid[12],
  };
  const col2 = {
    first: grid[1],
    second: grid[5],
    third: grid[9],
    fourth: grid[13],
  };
  const col3 = {
    first: grid[2],
    second: grid[6],
    third: grid[10],
    fourth: grid[14],
  };
  const col4 = {
    first: grid[3],
    second: grid[7],
    third: grid[11],
    fourth: grid[15],
  };
  // #endregion

  return colsSchema.parse({ col1, col2, col3, col4 });
}
