import { Cards } from '../../../../ebr';
import type { TContext } from '../../../../ebr/context';
export declare function _moveLeft(ctx: TContext): Cards;
export declare const moveLeft: import("xstate").AssignAction<{
    back: {
        game: {
            statitics?: {} | undefined;
            cards: [number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined];
            score: number;
        };
    };
    iterator: number;
}, never>;
