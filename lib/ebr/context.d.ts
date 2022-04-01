import { TypeOf } from 'zod';
export declare const contextSchema: import("zod").ZodObject<{
    back: import("zod").ZodObject<{
        game: import("zod").ZodObject<{
            cards: import("zod").ZodTuple<[import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>], null>;
            score: import("zod").ZodNumber;
            statitics: import("zod").ZodOptional<import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>>;
        }, "strip", import("zod").ZodTypeAny, {
            statitics?: {} | undefined;
            cards: [number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined];
            score: number;
        }, {
            statitics?: {} | undefined;
            cards: [number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined];
            score: number;
        }>;
    }, "strip", import("zod").ZodTypeAny, {
        game: {
            statitics?: {} | undefined;
            cards: [number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined];
            score: number;
        };
    }, {
        game: {
            statitics?: {} | undefined;
            cards: [number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined];
            score: number;
        };
    }>;
    iterator: import("zod").ZodNumber;
}, "strip", import("zod").ZodTypeAny, {
    back: {
        game: {
            statitics?: {} | undefined;
            cards: [number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined];
            score: number;
        };
    };
    iterator: number;
}, {
    back: {
        game: {
            statitics?: {} | undefined;
            cards: [number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined];
            score: number;
        };
    };
    iterator: number;
}>;
export declare type TContext = TypeOf<typeof contextSchema>;
