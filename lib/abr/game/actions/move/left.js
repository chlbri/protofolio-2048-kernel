"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveLeft = exports._moveLeft = void 0;
const immer_1 = require("@xstate/immer");
const helpers_1 = require("../helpers");
const inverseMoveArray_1 = require("../helpers/inverseMoveArray");
const moveArray_1 = require("../helpers/moveArray");
function _moveLeft(ctx) {
    const _rows = (0, helpers_1.groupByRows)(ctx);
    const row1 = (0, inverseMoveArray_1.inverseMoveArray)((0, moveArray_1.moveArray)((0, inverseMoveArray_1.inverseMoveArray)(_rows.row1)));
    const row2 = (0, inverseMoveArray_1.inverseMoveArray)((0, moveArray_1.moveArray)((0, inverseMoveArray_1.inverseMoveArray)(_rows.row2)));
    const row3 = (0, inverseMoveArray_1.inverseMoveArray)((0, moveArray_1.moveArray)((0, inverseMoveArray_1.inverseMoveArray)(_rows.row3)));
    const row4 = (0, inverseMoveArray_1.inverseMoveArray)((0, moveArray_1.moveArray)((0, inverseMoveArray_1.inverseMoveArray)(_rows.row4)));
    const rows = {
        row1,
        row2,
        row3,
        row4,
    };
    const cards = (0, helpers_1.mergeRowsToCards)(rows);
    console.log('OK =>', cards);
    return cards;
}
exports._moveLeft = _moveLeft;
exports.moveLeft = (0, immer_1.assign)(ctx => {
    ctx.back.game.cards = _moveLeft(ctx);
});
