import {
  isNotNumber,
  isNumber,
  isObject,
  isArray,
  isFunction,
  isString,
  isCssVar,
} from '../src';

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

test('is string', () => {
  expect(isString('1')).toBeTruthy();
});

test('is css var', () => {
  expect(isCssVar('var(--whatever-you-want)')).toBeTruthy();
  expect(isCssVar('4')).not.toBeTruthy();
});
