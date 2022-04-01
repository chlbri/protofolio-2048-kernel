import type { TContext } from '../../../ebr/context';
export declare function nextNumber(): 2 | 4;
export declare const _addRandomNumber: (ctx: TContext) => {
    back: {
        game: {
            statitics?: {} | undefined;
            cards: [number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined];
            score: number;
            moves: number;
            possibleMoves: {
                left: boolean;
                right: boolean;
                up: boolean;
                down: boolean;
            };
        };
    };
    iterator: number;
} | undefined;
export declare const addRandomNumber: import("xstate").AssignAction<{
    back: {
        game: {
            statitics?: {} | undefined;
            cards: [number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined];
            score: number;
            moves: number;
            possibleMoves: {
                left: boolean;
                right: boolean;
                up: boolean;
                down: boolean;
            };
        };
    };
    iterator: number;
}, any>;
