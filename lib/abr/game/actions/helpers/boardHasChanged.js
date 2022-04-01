"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardHasChanged = void 0;
function boardHasChanged(before, after) {
    return !!before.find((card, i) => card !== after[i]);
}
exports.boardHasChanged = boardHasChanged;
