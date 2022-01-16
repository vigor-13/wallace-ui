import { Dict, isString } from '@wallace-ui/utils';
import { Transform } from '.';

// ???
export const globalSet = new Set([
  'none',
  '-moz-initial',
  'inherit',
  'initial',
  'revert',
  'unset',
]);

// ???
// eslint-disable-next-line
export function parseGradient(value: string | null | undefined, theme: Dict) {
  // TODO: ...
  return ``;
}

// ???
export const isCSSFunction = (value: unknown) =>
  isString(value) && value.includes('(') && value.includes(')');

// ???
export const gradientTransform: Transform = (value, theme) =>
  parseGradient(value, theme ?? {});
