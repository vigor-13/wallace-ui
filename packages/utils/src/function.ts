import { isFunction } from './assertion';

export function runIfFn<T, U>(
  valueOrFn: T | ((...fnArgs: U[]) => T),
  ...args: U[]
): T {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

export const pipe =
  <R>(...fns: Array<(a: R) => R>) =>
  (v: R) =>
    fns.reduce((a, b) => b(a), v);
