import { TypeOf } from 'zod';
export declare const possibleMovesSchema: import("zod").ZodObject<{
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
export declare type Moves = TypeOf<typeof possibleMovesSchema>;
