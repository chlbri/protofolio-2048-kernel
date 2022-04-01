"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardsSchema = exports.cardPropsSchema = void 0;
const zod_1 = require("zod");
exports.cardPropsSchema = (0, zod_1.number)()
    .optional()
    .refine(arg => arg === undefined || (!(arg & (arg - 1)) && arg >= 2));
exports.cardsSchema = (0, zod_1.tuple)([
    exports.cardPropsSchema,
    exports.cardPropsSchema,
    exports.cardPropsSchema,
    exports.cardPropsSchema,
    exports.cardPropsSchema,
    exports.cardPropsSchema,
    exports.cardPropsSchema,
    exports.cardPropsSchema,
    exports.cardPropsSchema,
    exports.cardPropsSchema,
    exports.cardPropsSchema,
    exports.cardPropsSchema,
    exports.cardPropsSchema,
    exports.cardPropsSchema,
    exports.cardPropsSchema,
    exports.cardPropsSchema,
]);
