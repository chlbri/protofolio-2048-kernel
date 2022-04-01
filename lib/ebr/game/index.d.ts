export * from './card';
export * from './score';
export declare const gameSchema: import("zod").ZodObject<{
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
