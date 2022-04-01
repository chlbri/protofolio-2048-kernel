"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rowsSchema = void 0;
const zod_1 = require("zod");
const moveArray_1 = require("./moveArray");
exports.rowsSchema = (0, zod_1.object)({
    row1: moveArray_1.moveArraySchema,
    row2: moveArray_1.moveArraySchema,
    row3: moveArray_1.moveArraySchema,
    row4: moveArray_1.moveArraySchema,
});
