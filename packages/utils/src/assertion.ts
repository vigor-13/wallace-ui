/**
 * Number assertions
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number';
}
export function isNotNumber(value: any) {
  return typeof value !== 'number' || Number.isNaN(value) || !Number.isFinite(value);
}
export function isNumeric(value: any) {
  return value != null && value - parseFloat(value) + 1 >= 0;
}
