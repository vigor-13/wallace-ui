export type UnionStringArray<T extends Readonly<string[]>> = T[number];

/**
 * 문자열 key를 사용하는 map (value는 any)
 */
export type Dict<T = any> = Record<string, T>;

export type AnyFunction<T = any> = (...args: T[]) => any;

export type Booleanish = boolean | 'true' | 'false';
