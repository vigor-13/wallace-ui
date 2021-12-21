import { getFirstItem, getLastItem } from '../src/array';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe('first or last item queries', () => {
  test('should get first item', () => {
    expect(getFirstItem(array)).toEqual(1);
  });

  test('should get last item', () => {
    expect(getLastItem(array)).toEqual(9);
  });
});
