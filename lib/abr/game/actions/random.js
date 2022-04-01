"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRandomNumber = exports._addRandomNumber = exports.nextNumber = void 0;
const immer_1 = require("@xstate/immer");
const getEmptyPlaces_1 = require("./helpers/getEmptyPlaces");
function nextNumber() {
    const rand = Math.random();
    return rand < 0.7 ? 2 : 4;
}
exports.nextNumber = nextNumber;
const _addRandomNumber = (ctx) => {
    const emptyPlaces = (0, getEmptyPlaces_1.getEmptyPlaces)(ctx);
    if (emptyPlaces.length < 1)
        return ctx;
    const rand = Math.floor(Math.random() * (emptyPlaces.length - 1));
    ctx.back.game.cards[emptyPlaces[rand]] = nextNumber();
};
exports._addRandomNumber = _addRandomNumber;
exports.addRandomNumber = (0, immer_1.assign)(ctx => {
    (0, exports._addRandomNumber)(ctx);
});
