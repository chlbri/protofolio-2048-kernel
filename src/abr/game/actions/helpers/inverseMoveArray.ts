import { MoveArray } from '../../../../ebr/game/actions/moveArray';

export function inverseMoveArray(value: MoveArray): MoveArray {
  return {
    first: value.fourth,
    second: value.third,
    third: value.second,
    fourth: value.first,
  };
}
