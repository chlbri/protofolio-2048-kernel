"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameSchema = void 0;
const zod_1 = require("zod");
const card_1 = require("./card");
const MOVES_1 = require("./MOVES");
const score_1 = require("./score");
const statistics_1 = require("./statistics");
const possibleMoves_1 = require("./possibleMoves");
__exportStar(require("./card"), exports);
__exportStar(require("./score"), exports);
exports.gameSchema = (0, zod_1.object)({
    cards: card_1.cardsSchema,
    score: score_1.scoreSchema,
    moves: MOVES_1.movesSchema,
    statitics: statistics_1.statisticsSchema,
    possibleMoves: possibleMoves_1.possibleMovesSchema
});
