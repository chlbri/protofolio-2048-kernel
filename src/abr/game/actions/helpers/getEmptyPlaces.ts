import { TContext } from '../../../../ebr';

export function getEmptyPlaces(ctx: TContext): number[] {
  const cards = ctx.back.game.cards;
  return (
    cards.map((card, i) => [card, i]) as [number | undefined, number][]
  )
    .filter(([card]) => !card)
    .map(([, i]) => i);
}
