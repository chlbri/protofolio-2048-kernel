import { TypeOf } from 'zod';
export declare const contextSchema: import("zod").ZodObject<{
    back: import("zod").ZodObject<{
        game: import("zod").ZodObject<{
            cards: import("zod").ZodTuple<[import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>], null>;
            score: import("zod").ZodNumber;
            moves: import("zod").ZodNumber;
            statitics: import("zod").ZodOptional<import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>>;
            possibleMoves: import("zod").ZodObject<{
                left: import("zod").ZodBoolean;
                right: import("zod").ZodBoolean;
                up: import("zod").ZodBoolean;
                down: import("zod").ZodBoolean;
            }, "strip", import("zod").ZodTypeAny, {
                left: boolean;
                right: boolean;
                up: boolean;
                down: boolean;
            }, {
                left: boolean;
                right: boolean;
                up: boolean;
                down: boolean;
            }>;
        }, "strip", import("zod").ZodTypeAny, {
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
        }, {
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
        }>;
    }, "strip", import("zod").ZodTypeAny, {
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
    }, {
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
    }>;
    iterator: import("zod").ZodNumber;
}, "strip", import("zod").ZodTypeAny, {
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
}, {
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
}>;
export declare type TContext = TypeOf<typeof contextSchema>;
