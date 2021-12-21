import { isNotNumber, isNumber, isObject, isArray, isFunction } from '../src';

test('is number', () => {
  expect(isNumber(1.2)).toBeTruthy();
  expect(isNumber('20')).toBeFalsy();
});
test('is not number', () => {
  expect(isNotNumber('1')).toBeTruthy();
  expect(isNotNumber(1)).toBeFalsy();
});

test('is object', () => {
  expect(isObject([])).toBeFalsy();
  expect(isObject({})).toBeTruthy();
});

test('is array', () => {
  expect(isArray([1])).toBeTruthy();
});

test('is function', () => {
  expect(isFunction(() => {})).toBeTruthy();
});
