"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveRight = exports._moveRight = void 0;
const immer_1 = require("@xstate/immer");
const helpers_1 = require("../helpers");
const moveArray_1 = require("../helpers/moveArray");
function _moveRight(ctx) {
    const _rows = (0, helpers_1.groupByRows)(ctx);
    const row1 = (0, moveArray_1.moveArray)(_rows.row1);
    const row2 = (0, moveArray_1.moveArray)(_rows.row2);
    const row3 = (0, moveArray_1.moveArray)(_rows.row3);
    const row4 = (0, moveArray_1.moveArray)(_rows.row4);
    const rows = {
        row1,
        row2,
        row3,
        row4,
    };
    const cards = (0, helpers_1.mergeRowsToCards)(rows);
    return cards;
}
exports._moveRight = _moveRight;
exports.moveRight = (0, immer_1.assign)(ctx => {
    ctx.back.game.cards = _moveRight(ctx);
});
