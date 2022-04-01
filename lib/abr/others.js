"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inc = void 0;
const immer_1 = require("@xstate/immer");
exports.inc = (0, immer_1.assign)(ctx => {
    ctx.iterator = ctx.iterator + 1;
});
