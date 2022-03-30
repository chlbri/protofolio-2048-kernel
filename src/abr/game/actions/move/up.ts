import type { Context } from '../../../../ebr/context';
import { groupByColumns } from '../helpers';

export function moveUp(ctx: Context) {
  const { col1, col2, col3, col4 } = groupByColumns(ctx);
  
}
