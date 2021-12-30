import { Dict, pick } from '@wallace-ui/utils';

/**
 * CSS 변수 생성에 사용되는 (빌트인) 토큰들이다.
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

export type ThemeScale =
  | typeof tokens[number]
  | 'transition.duration'
  | 'transition.property'
  | 'transition.easing';

/**
 * 테마 객체에서 토큰 프로퍼티들만 추출한다.
 */
export function extractTokens(theme: Dict) {
  const _tokens = tokens as unknown as string[];
  return pick(theme, _tokens);
}

/**
 * 테마 객체에서 변환된 CSS 변수를 제거한다.
 * 
 * 예를 들어 다음과 같은 프로퍼티 들을 제거한다.
 * @example __cssMap, __cssVars, __breakpoints
 */
export function omitVars(rawTheme: Dict) {
  const { __cssMap, __cssVars, __breakpoints, ...cleanTheme } = rawTheme;
  return cleanTheme;
}
