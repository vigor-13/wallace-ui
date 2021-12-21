import { Dict, runIfFn } from '@wallace-ui/utils';
import * as CSS from 'csstype';
import { StyleObjectOrFn } from '.';
import { CssTheme } from './utils';
import { expandResponsive } from './utils/expand-responsive';
import { Config } from './utils/prop-config';

// ???
interface GetCSSOptions {
  theme: CssTheme;
  configs?: Config;
  pseudos?: Record<string, CSS.Pseudos | (string & {})>;
}

// ???
export function getCss(options: GetCSSOptions) {
  const { configs = {}, pseudos = {}, theme } = options;

  const css = (stylesOrFn: Dict, nested = false) => {
    const _styles = runIfFn(stylesOrFn, theme);
    const styles = expandResponsive(_styles)(theme);

    let computedStyles: Dict = {};

    // TODO: ...
  };

  return css;
}

// ???
export const css = (styles: StyleObjectOrFn) => (theme: any) => {
  const cssFn = '';
};
