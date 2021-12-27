import { omit, pick, filterUndefined } from '../src/object';

const obj = { a: 1, b: 2, c: { d: 3 } };

test('should return object with omitted property', () => {
  expect(omit(obj, ['a'])).toStrictEqual({ b: 2, c: { d: 3 } });
});

test('should return property in object with specified key', () => {
  expect(pick(obj, ['a'])).toStrictEqual({ a: 1 });
});

test('should filter undefined values in object', () => {
  const result = filterUndefined({
    size: null,
    variant: undefined,
    colorScheme: 'red',
  });
  expect(result).toStrictEqual({ colorScheme: 'red' });
});
