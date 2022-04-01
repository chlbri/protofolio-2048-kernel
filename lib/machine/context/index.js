"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
const cards_1 = require("./cards");
exports.context = {
    back: {
        game: {
            cards: cards_1.cards,
            score: 0,
        },
    },
    iterator: 0,
};
