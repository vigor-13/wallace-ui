import { isNotNumber, isNumber, isNumeric } from '../src';

test('isNumber', () => {
  expect(isNumber(1.2)).toBeTruthy();
  expect(isNumber('20')).toBeFalsy();
});
test('isNotNumber', () => {
  expect(isNotNumber('1')).toBeTruthy();
  expect(isNotNumber(1)).toBeFalsy();
});
