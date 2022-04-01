"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignPossibleMoves = exports.rinitGame = exports.incMove = exports.inc = void 0;
const immer_1 = require("@xstate/immer");
const helpers_1 = require("./helpers");
const boardHasChanged_1 = require("./helpers/boardHasChanged");
const down_1 = require("./move/down");
const left_1 = require("./move/left");
const right_1 = require("./move/right");
const up_1 = require("./move/up");
exports.inc = (0, immer_1.assign)(ctx => {
    ctx.iterator = ctx.iterator + 1;
});
exports.incMove = (0, immer_1.assign)(ctx => {
    ctx.back.game.moves = ctx.back.game.moves + 1;
});
exports.rinitGame = (0, immer_1.assign)(ctx => {
    ctx.back.game.cards = helpers_1.defaultCards;
});
exports.assignPossibleMoves = (0, immer_1.assign)(ctx => {
    const cards = ctx.back.game.cards;
    const moveUpCards = (0, up_1._moveUp)(ctx);
    const moveDownCards = (0, down_1._moveDown)(ctx);
    const moveLeftCards = (0, left_1._moveLeft)(ctx);
    const moveRightCards = (0, right_1._moveRight)(ctx);
    ctx.back.game.possibleMoves = {
        left: (0, boardHasChanged_1.boardHasChanged)(cards, moveLeftCards),
        right: (0, boardHasChanged_1.boardHasChanged)(cards, moveRightCards),
        up: (0, boardHasChanged_1.boardHasChanged)(cards, moveUpCards),
        down: (0, boardHasChanged_1.boardHasChanged)(cards, moveDownCards),
    };
});
