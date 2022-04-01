import { Cards } from '../../../../ebr';
import type { TContext } from '../../../../ebr/context';
export declare function _moveDown(ctx: TContext): Cards;
export declare const moveDown: import("xstate").AssignAction<{
    back: {
        game: {
            statitics?: {} | undefined;
            cards: [number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined];
            score: number;
        };
    };
    iterator: number;
}, never>;
