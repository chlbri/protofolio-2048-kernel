"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeRowsToCards = exports.groupByRows = void 0;
const rows_1 = require("../../../../ebr/game/actions/rows");
function groupByRows(ctx) {
    const grid = ctx.back.game.cards;
    // #region ROWS
    const row1 = {
        first: grid[0],
        second: grid[1],
        third: grid[2],
        fourth: grid[3],
    };
    const row2 = {
        first: grid[4],
        second: grid[5],
        third: grid[6],
        fourth: grid[7],
    };
    const row3 = {
        first: grid[8],
        second: grid[9],
        third: grid[10],
        fourth: grid[11],
    };
    const row4 = {
        first: grid[12],
        second: grid[13],
        third: grid[14],
        fourth: grid[15],
    };
    // #endregion
    return rows_1.rowsSchema.parse({ row1, row2, row3, row4 });
}
exports.groupByRows = groupByRows;
function mergeRowsToCards(rows) {
    return [
        rows.row1.first,
        rows.row1.second,
        rows.row1.third,
        rows.row1.fourth,
        rows.row2.first,
        rows.row2.second,
        rows.row2.third,
        rows.row2.fourth,
        rows.row3.first,
        rows.row3.second,
        rows.row3.third,
        rows.row3.fourth,
        rows.row4.first,
        rows.row4.second,
        rows.row4.third,
        rows.row4.fourth,
    ];
}
exports.mergeRowsToCards = mergeRowsToCards;
