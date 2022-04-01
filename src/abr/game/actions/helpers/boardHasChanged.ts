import { Cards } from '../../../../ebr';

export function boardHasChanged(before: Cards, after: Cards) {
  return JSON.stringify(before) !== JSON.stringify(after);
}
