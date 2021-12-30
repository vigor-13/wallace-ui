import { analyzeBreakpoints, Dict } from '@wallace-ui/utils';
import { WithCSSVar } from '../utils';
import { createThemeVars } from './create-theme-vars';
import { extractTokens, omitVars } from './theme-tokens';

/**
 * 테마 객체를 분석해서 CSS var를 생성한다.
 * 
 * @see [MDN Reference - var()](https://developer.mozilla.org/ko/docs/Web/CSS/var())
 */
export function toCSSVar<T extends Dict>(rawTheme: T) {
  /* 
   * 1. theme 객체가 이미 변환된 CSS var를 갖고 있는 경우(e.g extending the theme)에 해당 변수들을 생략함.
   */
  const theme = omitVars(rawTheme);

  /*
   * 2. 테마 객체에서 지정된 토큰을 키값으로 갖고 있는 프로퍼티들만 추출한다.
   */
  const tokens = extractTokens(theme);


  /*
   * 3. 변수 생성에 사용되는 접두어 (default: wallace) 
   */
  const cssVarPrefix = theme.config?.cssVarPrefix;

  const {
    /**
     * This is more like a dictionary of tokens users will type `green.500`,
     * and their equivalent css variable.
     */
    cssMap,

    /**
     * The extracted css variables will be stored here, and used in
     * the emotion's <Global /> component to attach avriables to `:root`
     */
    cssVars,
  } = createThemeVars(tokens, { cssVarPrefix });

  const defaultCssVars: Dict = {
    '--wallace-ring-inset': 'var(--wallace-empty,/*!*/ /*!*/)',
    '--wallace-ring-offset-width': '0px',
    '--wallace-ring-offset-color': '#fff',
    '--wallace-ring-color': 'rgba(66, 153, 225, 0.6)',
    '--wallace-ring-offset-shadow': '0 0 #0000',
    '--wallace-ring-shadow': '0 0 #0000',
    '--wallace-space-x-reverse': '0',
    '--wallace-space-y-reverse': '0',
  };

  Object.assign(theme, {
    __cssVars: { ...defaultCssVars, ...cssVars },
    __cssMap: cssMap,
    __breakPoints: analyzeBreakpoints(theme.breakpoint),
  });

  return theme as WithCSSVar<T>;
}
