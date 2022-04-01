import type { TypeOf } from 'zod';
export declare const rowsSchema: import("zod").ZodObject<{
    row1: import("zod").ZodObject<{
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
    row2: import("zod").ZodObject<{
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
    row3: import("zod").ZodObject<{
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
    row4: import("zod").ZodObject<{
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
}, "strip", import("zod").ZodTypeAny, {
    row1: {
        first?: number | undefined;
        second?: number | undefined;
        third?: number | undefined;
        fourth?: number | undefined;
    };
    row2: {
        first?: number | undefined;
        second?: number | undefined;
        third?: number | undefined;
        fourth?: number | undefined;
    };
    row3: {
        first?: number | undefined;
        second?: number | undefined;
        third?: number | undefined;
        fourth?: number | undefined;
    };
    row4: {
        first?: number | undefined;
        second?: number | undefined;
        third?: number | undefined;
        fourth?: number | undefined;
    };
}, {
    row1: {
        first?: number | undefined;
        second?: number | undefined;
        third?: number | undefined;
        fourth?: number | undefined;
    };
    row2: {
        first?: number | undefined;
        second?: number | undefined;
        third?: number | undefined;
        fourth?: number | undefined;
    };
    row3: {
        first?: number | undefined;
        second?: number | undefined;
        third?: number | undefined;
        fourth?: number | undefined;
    };
    row4: {
        first?: number | undefined;
        second?: number | undefined;
        third?: number | undefined;
        fourth?: number | undefined;
    };
}>;
export declare type Rows = TypeOf<typeof rowsSchema>;
