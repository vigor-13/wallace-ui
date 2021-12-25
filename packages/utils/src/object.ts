import { Dict } from './types';

export { default as mergeWith } from 'lodash.mergewith';

export const objectKeys = <T extends Dict>(obj: T) => {
  return Object.keys(obj) as unknown as (keyof T)[];
};

type FilterFn<T> = (value: any, key: string, object: T) => boolean;

/**
 * ### [Function] objectFilter
 *
 * 콜백 함수에 지정된 조건을 만족하는 객체의 항목을 반환한다.
 *
 * @param object 대상 객체
 * @param fn 필터링 함수
 */
export function objectFilter<T extends Dict>(object: T, fn: FilterFn<T>) {
  const result: Dict = {};

  Object.keys(object).forEach((key) => {
    const value = object[key];
    const shouldPass = fn(value, key, object);
    if (shouldPass) result[key] = value;
  });

  return result;
}

export const filterUndefined = (object: Dict) =>
  objectFilter(object, (val) => val !== null && val !== undefined);

/**
 * Object.entries polyfill for Node-v10 compability
 *
 * @see [stack overflow](https://stackoverflow.com/questions/57379778/typescript-type-for-reduce)
 */
export const fromEntries = <T extends unknown>(entries: [string, any][]) =>
  entries.reduce<Record<string, any>>((carry, [key, value]) => {
    carry[key] = value;
    return carry;
  }, {}) as T;

/**
 * ???
 * Get value from a deeply nested object using a string path.
 * Memoizes the value.
 */
export function get(
  obj: { [key: string | number]: any },
  path: string | number,
  fallback?: any,
  index?: number
) {
  const key = typeof path === 'string' ? path.split('.') : [path];

  for (index = 0; index < key.length; index += 1) {
    if (!obj) break;
    obj = obj[key[index]];
  }

  return obj === undefined ? fallback : obj;
}

// ???
type Get = (
  obj: Readonly<object>,
  path: string | number,
  fallback?: any,
  index?: number
) => any;

// ???
export const memoize = (fn: Get) => {
  const cache = new WeakMap();

  const memoizedFn: Get = (obj, path, fallback, index) => {
    if (typeof obj === 'undefined') return fn(obj, path, fallback);
    if (!cache.has(obj)) cache.set(obj, new Map());

    const map = cache.get(obj);

    if (map.has(path)) return map.get(path);

    const value = fn(obj, path, fallback, index);
    map.set(path, value);

    return value;
  };

  return memoizedFn;
};

export const memoizedGet = memoize(get);
