import { Dict } from '@wallace-ui/utils';

// ???
export interface CreateThemeVarsOptions {
  cssVarPrefix?: string;
}

// ???
export interface ThemeVars {
  cssVars: Dict;
  cssMap: Dict;
}

/**
 * 테마 객체와 접두어를 받아서 CSS var를 생성한다.
 *
 * @see [MDN Reference - var()](https://developer.mozilla.org/ko/docs/Web/CSS/var())
 */
export function createThemeVars(target: Dict, options: CreateThemeVarsOptions) {
  const context: ThemeVars = {
    cssMap: {},
    cssVars: {},
  };

  // TODO: walkObject 미구현...

  return context;
}
