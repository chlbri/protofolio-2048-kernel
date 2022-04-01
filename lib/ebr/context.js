"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextSchema = void 0;
const zod_1 = require("zod");
const game_1 = require("./game");
exports.contextSchema = (0, zod_1.object)({
    back: (0, zod_1.object)({ game: game_1.gameSchema }),
    iterator: (0, zod_1.number)(),
});
