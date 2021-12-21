export function getFirstItem<T>(array: T[]): T | undefined {
  return array != null && array.length ? array[0] : undefined;
}

export function getLastItem<T>(array: T[]): T | undefined {
  const length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}
