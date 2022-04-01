"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
const cards_1 = require("./cards");
const possibleMoves_1 = require("./possibleMoves");
exports.context = {
    back: {
        game: {
            cards: cards_1.cards,
            score: 0,
            moves: 0,
            possibleMoves: possibleMoves_1.possibleMoves,
        },
    },
    iterator: 0,
};
