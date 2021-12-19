export type UnionStringArray<T extends Readonly<string[]>> = T[number];

export type Dict<T = any> = Record<string, T>;

export type AnyFunction<T = any> = (...args: T[]) => any;
