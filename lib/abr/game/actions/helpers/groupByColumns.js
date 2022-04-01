"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeColumnsToCards = exports.groupByColumns = void 0;
const columns_1 = require("./../../../../ebr/game/actions/columns");
function groupByColumns(ctx) {
    const grid = ctx.back.game.cards;
    // #region COLUMNS
    const col1 = {
        first: grid[0],
        second: grid[4],
        third: grid[8],
        fourth: grid[12],
    };
    const col2 = {
        first: grid[1],
        second: grid[5],
        third: grid[9],
        fourth: grid[13],
    };
    const col3 = {
        first: grid[2],
        second: grid[6],
        third: grid[10],
        fourth: grid[14],
    };
    const col4 = {
        first: grid[3],
        second: grid[7],
        third: grid[11],
        fourth: grid[15],
    };
    // #endregion
    return columns_1.colsSchema.parse({ col1, col2, col3, col4 });
}
exports.groupByColumns = groupByColumns;
function mergeColumnsToCards(columns) {
    return [
        columns.col1.first,
        columns.col2.first,
        columns.col3.first,
        columns.col4.first,
        columns.col1.second,
        columns.col2.second,
        columns.col3.second,
        columns.col4.second,
        columns.col1.third,
        columns.col2.third,
        columns.col3.third,
        columns.col4.third,
        columns.col1.fourth,
        columns.col2.fourth,
        columns.col3.fourth,
        columns.col4.fourth,
    ];
}
exports.mergeColumnsToCards = mergeColumnsToCards;
