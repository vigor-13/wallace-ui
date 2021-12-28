import { analyzeBreakpoints, Dict } from '@wallace-ui/utils';
import { WithCSSVar } from '../utils';
import { createThemeVars } from './create-theme-vars';
import { extractTokens, omitVars } from './theme-tokens';

// ???
export function toCSSVar<T extends Dict>(rawTheme: T) {
  /**
   * In the case the theme has already been converted to css-var (e.g extending the theme),
   * we can omit the computed css vars and recomputed it for the extended theme.
   */
  const theme = omitVars(rawTheme);

  /**
   * omit components and breakpoints from css variable map.
   */
  const tokens = extractTokens(theme);

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
