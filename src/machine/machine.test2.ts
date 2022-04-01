import { interpret } from 'xstate';
import { machine, S_Machine } from './machine';

const transi = interpret(machine as S_Machine).start();
transi.send('START');

transi.subscribe(state => {
  const out = {
    value: state.value,
    cards: state.context.back.game.cards,
  };
  state.context.iterator;
});
