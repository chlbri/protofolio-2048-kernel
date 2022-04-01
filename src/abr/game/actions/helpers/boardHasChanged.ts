import { Cards } from '../../../../ebr';

export function boardHasChanged(before: Cards, after: Cards) {
  return !!before.find((card, i) => card !== after[i]);
}
