export declare const inc: import("xstate").AssignAction<{
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
export declare const incMove: import("xstate").AssignAction<{
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
export declare const assignPossibleMoves: import("xstate").AssignAction<{
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
