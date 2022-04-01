import type { TypeOf } from 'zod';
export declare const moveArraySchema: import("zod").ZodObject<{
    first: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>;
    second: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>;
    third: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>;
    fourth: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNumber>, number | undefined, number | undefined>;
}, "strip", import("zod").ZodTypeAny, {
    first?: number | undefined;
    second?: number | undefined;
    third?: number | undefined;
    fourth?: number | undefined;
}, {
    first?: number | undefined;
    second?: number | undefined;
    third?: number | undefined;
    fourth?: number | undefined;
}>;
export declare type MoveArray = TypeOf<typeof moveArraySchema>;
