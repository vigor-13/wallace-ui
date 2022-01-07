import { isObject } from '@wallace-ui/utils';
import { WallaceTheme } from './theme.types';

export const requiredWallaceThemeKeys: (keyof WallaceTheme)[] = [
  // *TODO: breakpoints 미구현...
  'borders',
  'colors',
  'components',
  'config',
  'direction',
  'fonts',
  'fontSizes',
  'fontWeights',
  'letterSpacings',
  'lineHeights',
  'radii',
  'shadows',
  'sizes',
  'space',
  'styles',
  'transition',
  'zIndices',
];

export function isWallaceTheme(unit: unknown): unit is WallaceTheme {
  if (!isObject(unit)) {
    return false;
  }

  return requiredWallaceThemeKeys.every((propertyName) =>
    // REF: https://stackoverflow.com/questions/12017693/why-use-object-prototype-hasownproperty-callmyobj-prop-instead-of-myobj-hasow
    Object.prototype.hasOwnProperty.call(unit, propertyName)
  );
}
