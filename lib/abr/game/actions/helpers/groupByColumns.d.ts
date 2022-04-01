import type { Cards, TContext } from '../../../../ebr';
import { Cols } from './../../../../ebr/game/actions/columns';
export declare function groupByColumns(ctx: TContext): Cols;
export declare function mergeColumnsToCards(columns: Cols): Cards;
