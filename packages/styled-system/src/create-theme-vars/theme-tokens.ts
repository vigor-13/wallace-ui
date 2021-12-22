/**
 * CSS 변수를 생성에 사용되는 (빌트인) 토큰들이다.
 *
 * @example
 * --wallace-fontSizes-lg: '18px'
 * --wallace-colors-gray-100: '#fafafa'
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
 * CSS 변수 생성에 사용되는 토큰 타입이다.
 */
export type ThemeScale =
  | typeof tokens[number]
  | 'transition.duration'
  | 'transition.property'
  | 'transition.easing';
