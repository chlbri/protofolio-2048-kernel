"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveDown = exports._moveDown = void 0;
const immer_1 = require("@xstate/immer");
const helpers_1 = require("../helpers");
const moveArray_1 = require("../helpers/moveArray");
function _moveDown(ctx) {
    const _columns = (0, helpers_1.groupByColumns)(ctx);
    const col1 = (0, moveArray_1.moveArray)(_columns.col1);
    const col2 = (0, moveArray_1.moveArray)(_columns.col2);
    const col3 = (0, moveArray_1.moveArray)(_columns.col3);
    const col4 = (0, moveArray_1.moveArray)(_columns.col4);
    const columns = {
        col1,
        col2,
        col3,
        col4,
    };
    const cards = (0, helpers_1.mergeColumnsToCards)(columns);
    return cards;
}
exports._moveDown = _moveDown;
exports.moveDown = (0, immer_1.assign)(ctx => {
    ctx.back.game.cards = _moveDown(ctx);
});
