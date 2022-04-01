"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardHasChanged = void 0;
function boardHasChanged(before, after) {
    return JSON.stringify(before) !== JSON.stringify(after);
}
exports.boardHasChanged = boardHasChanged;
