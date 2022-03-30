import { createMachine as create } from '@bemedev/fstate';
import type { MoveArray } from '../../../../ebr/game/actions/moveArray';

export function createF(context: MoveArray) {
  return create(
    {
      context,
      tsTypes: {
        args: undefined,
      },
      initial: 'third',
      states: {
        third: {
          type: 'sync',
          transitions: [
            {
              conditions: 'thirdIsEmpty',
              target: 'second',
            },
            {
              conditions: 'thirdEqualsFourth',
              target: 'second',
              actions: ['addThirdToFourth', 'removeThird'],
            },
            { target: 'second' },
          ],
        },
        second: {
          type: 'final',
        },
      },
    },
    { actions: {} },
  );
}
