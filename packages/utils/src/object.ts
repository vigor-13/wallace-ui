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
