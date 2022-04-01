"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveArraySchema = void 0;
const zod_1 = require("zod");
const card_1 = require("../card");
exports.moveArraySchema = (0, zod_1.object)({
    first: card_1.cardPropsSchema,
    second: card_1.cardPropsSchema,
    third: card_1.cardPropsSchema,
    fourth: card_1.cardPropsSchema,
}).required();
