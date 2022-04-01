import { createMachine as create } from '@bemedev/fstate';
import type { MoveArray } from '../../../../ebr/game/actions/moveArray';

export function createF(value: MoveArray) {
  return create(
    {
      context: {
        value,
        merged: {
          fourth: false,
          third: false,
          second: false,
        },
      },
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
              actions: ['addThirdToFourth', 'removeThird', 'mergeFourth'],
            },
            {
              conditions: 'fourthIsEmpty',
              target: 'second',
              actions: ['moveThirdToFourth', 'removeThird'],
            },
            { target: 'second' },
          ],
        },
        second: {
          type: 'sync',
          transitions: [
            {
              conditions: 'secondIsEmpty',
              target: 'first',
            },
            {
              conditions: ['secondEqualsThird', 'fourthIsEmpty'],
              target: 'first',
              actions: [
                'addSecondToThird',
                'removeSecond',
                'moveThirdToFourth',
                'removeThird',
                'mergeFourth',
              ],
            },
            {
              conditions: 'secondEqualsThird',
              target: 'first',
              actions: ['addSecondToThird', 'removeSecond', 'mergeThird'],
            },

            {
              conditions: ['fourthIsMerged', 'thirdIsEmpty'],
              target: 'first',
              actions: ['moveSecondToThird', 'removeSecond'],
            },
            {
              conditions: ['thirdIsEmpty', 'fourthIsEmpty'],
              actions: [
                'moveSecondToThird',
                'removeSecond',
                'moveThirdToFourth',
                'removeThird',
              ],
              target: 'first',
            },
            {
              conditions: ['secondEqualsFourth', 'thirdIsEmpty'],
              target: 'first',
              actions: [
                'addSecondToFourth',
                'removeSecond',
                'mergeFourth',
              ],
            },
            {
              conditions: ['thirdIsEmpty'],
              target: 'first',
              actions: ['moveSecondToThird', 'removeSecond'],
            },
            { target: 'first' },
          ],
        },
        first: {
          type: 'sync',
          transitions: [
            {
              conditions: 'firstIsEmpty',
              target: 'final',
            },
            {
              conditions: [
                'secondIsEmpty',
                'thirdIsEmpty',
                'fourthIsEmpty',
              ],
              target: 'final',
              actions: [
                'moveFirstToSecond',
                'removeFirst',
                'moveSecondToThird',
                'removeSecond',
                'moveThirdToFourth',
                'removeThird',
              ],
            },
            {
              conditions: [
                'fourthIsNotMerged',
                'firstEqualsFourth',
                'secondIsEmpty',
                'thirdIsEmpty',
              ],
              target: 'final',
              actions: ['addFirstToFourth', 'removeFirst'],
            },
            {
              conditions: [
                'thirdIsNotMerged',
                'firstEqualsThird',
                'secondIsEmpty',
              ],
              target: 'final',
              actions: ['addFirstToThird', 'removeFirst'],
            },

            {
              conditions: 'firstEqualsSecond',
              target: 'final',
              actions: ['addFirstToSecond', 'removeFirst'],
            },
            {
              conditions: ['secondIsEmpty', 'thirdIsEmpty'],
              target: 'final',
              actions: [
                'moveFirstToSecond',
                'removeFirst',
                'moveSecondToThird',
                'removeSecond',
              ],
            },
            {
              conditions: 'secondIsEmpty',
              target: 'final',
              actions: ['moveFirstToSecond', 'removeFirst'],
            },
            { target: 'final' },
          ],
        },
        final: { type: 'final' },
      },
    },
    {
      actions: {
        addThirdToFourth: ctx => {
          ctx.value.fourth = ctx.value.third! + ctx.value.fourth!;
        },
        moveThirdToFourth: ctx => {
          ctx.value.fourth = ctx.value.third;
        },
        moveSecondToThird: ctx => {
          ctx.value.third = ctx.value.second;
        },
        moveFirstToSecond: ctx => {
          ctx.value.second = ctx.value.first;
        },
        addSecondToFourth: ctx => {
          ctx.value.fourth = ctx.value.second! + ctx.value.fourth!;
        },
        addSecondToThird: ctx => {
          ctx.value.third = ctx.value.second! + ctx.value.third!;
        },
        addFirstToFourth: ctx => {
          ctx.value.fourth = ctx.value.first! + ctx.value.fourth!;
        },
        addFirstToThird: ctx => {
          ctx.value.third = ctx.value.first! + ctx.value.third!;
        },
        addFirstToSecond: ctx => {
          ctx.value.second = ctx.value.first! + ctx.value.second!;
        },
        removeThird: ctx => {
          ctx.value.third = undefined;
        },
        removeSecond: ctx => {
          ctx.value.second = undefined;
        },
        removeFirst: ctx => {
          ctx.value.first = undefined;
        },
        mergeFourth: ctx => {
          ctx.merged.fourth = true;
        },
        mergeThird: ctx => {
          ctx.merged.third = true;
        },
      },
      conditions: {
        fourthIsMerged: ({ merged: { fourth } }) => fourth,
        fourthIsNotMerged: ({ merged: { fourth } }) => !fourth,
        thirdIsMerged: ({ merged: { third } }) => third,
        thirdIsNotMerged: ({ merged: { third } }) => !third,
        fourthIsEmpty: ({ value: { fourth } }) => !fourth,
        thirdIsEmpty: ({ value: { third } }) => !third,
        secondIsEmpty: ({ value: { second } }) => !second,
        firstIsEmpty: ({ value: { first } }) => !first,
        thirdEqualsFourth: ({ value: { third, fourth } }) => {
          return third === fourth;
        },
        secondEqualsThird: ({ value: { third, second } }) => {
          return third === second;
        },
        secondEqualsFourth: ({ value: { second, fourth } }) => {
          return second === fourth;
        },
        firstEqualsSecond: ({ value: { second, first } }) => {
          return second === first;
        },
        firstEqualsThird: ({ value: { first, third } }) => first === third,
        firstEqualsFourth: ({ value: { first, fourth } }) => {
          return first === fourth;
        },
      },
    },
  );
}
