import { Cards } from '../../../../ebr';
import type { TContext } from '../../../../ebr/context';
import { Rows } from '../../../../ebr/game/actions/rows';
export declare function groupByRows(ctx: TContext): Rows;
export declare function mergeRowsToCards(rows: Rows): Cards;
