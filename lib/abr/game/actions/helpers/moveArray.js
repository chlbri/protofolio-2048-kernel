"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveArray = void 0;
const fstate_1 = require("@bemedev/fstate");
const moveArray_1 = require("../../../../ebr/game/actions/moveArray");
const createF_1 = require("./createF");
function moveArray(context) {
    const moveMachine = (0, createF_1.createF)(moveArray_1.moveArraySchema.parse(context));
    return (0, fstate_1.serve)(moveMachine)(undefined).value;
}
exports.moveArray = moveArray;
