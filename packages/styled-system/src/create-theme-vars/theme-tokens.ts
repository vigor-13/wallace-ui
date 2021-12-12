/**
 * ???
 */
const tokens = [
  'colors',
  'borders',
  'borderWidths',
  'borderStyles',
  'fonts',
  'fontSizes',
  'fontWeights',
  'letterSpacings',
  'lineHeights',
  'radii',
  'space',
  'shadows',
  'sizes',
  'zIndices',
  'transition',
  'blur',
] as const;

/**
 * ???
 */
export type ThemeScale =
  | typeof tokens[number]
  | 'transition.duration'
  | 'transition.property'
  | 'transition.easing';
