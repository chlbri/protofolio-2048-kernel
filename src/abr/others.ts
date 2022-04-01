import { assign } from '@xstate/immer';
import { TContext } from '../ebr';

export const inc = assign<TContext, any>(ctx => {
  ctx.iterator = ctx.iterator + 1;
});
