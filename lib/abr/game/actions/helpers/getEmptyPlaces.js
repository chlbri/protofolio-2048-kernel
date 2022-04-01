"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmptyPlaces = void 0;
function getEmptyPlaces(ctx) {
    const cards = ctx.back.game.cards;
    return cards.map((card, i) => [card, i])
        .filter(([card]) => !card)
        .map(([, i]) => i);
}
exports.getEmptyPlaces = getEmptyPlaces;
