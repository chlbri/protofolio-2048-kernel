"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xstate_1 = require("xstate");
const machine_1 = require("./machine");
const transi = (0, xstate_1.interpret)(machine_1.machine).start();
transi.send('START');
transi.subscribe(state => {
    const out = {
        value: state.value,
        cards: state.context.back.game.cards,
    };
    state.context.iterator;
});
