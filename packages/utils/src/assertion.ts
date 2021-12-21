import { Dict } from './types';

// Number assertions
export function isNumber(value: any): value is number {
  return typeof value === 'number';
}
export function isNotNumber(value: any) {
  return typeof value !== 'number' || Number.isNaN(value) || !Number.isFinite(value);
}
export function isNumeric(value: any) {
  return value != null && value - parseFloat(value) + 1 >= 0;
}

// Function assertions
export function isFunction<T extends Function = Function>(value: any): value is T {
  return typeof value === 'function';
}

// Array assertions
export function isArray<T>(value: any): value is Array<T> {
  return Array.isArray(value);
}

// Object assertions
export function isObject(value: any): value is Dict {
  const type = typeof value;
  return (
    value != null && (type === 'object' || type === 'function') && !isArray(value)
  );
}
