"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.possibleMovesSchema = void 0;
const zod_1 = require("zod");
exports.possibleMovesSchema = (0, zod_1.object)({
    left: (0, zod_1.boolean)(),
    right: (0, zod_1.boolean)(),
    up: (0, zod_1.boolean)(),
    down: (0, zod_1.boolean)(),
});
