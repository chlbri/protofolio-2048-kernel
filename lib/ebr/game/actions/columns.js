"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colsSchema = void 0;
const zod_1 = require("zod");
const moveArray_1 = require("./moveArray");
exports.colsSchema = (0, zod_1.object)({
    col1: moveArray_1.moveArraySchema,
    col2: moveArray_1.moveArraySchema,
    col3: moveArray_1.moveArraySchema,
    col4: moveArray_1.moveArraySchema,
});
