"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inverseMoveArray = void 0;
function inverseMoveArray(value) {
    return {
        first: value.fourth,
        second: value.third,
        third: value.second,
        fourth: value.first,
    };
}
exports.inverseMoveArray = inverseMoveArray;
