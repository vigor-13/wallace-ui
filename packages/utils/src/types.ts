export type UnionStringArray<T extends Readonly<string[]>> = T[number];

export type Dict<T = any> = Record<string, T>;
