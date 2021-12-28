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

// ???
export function createThemeVars(target: Dict, options: CreateThemeVarsOptions) {
  const context: ThemeVars = {
    cssMap: {},
    cssVars: {},
  };

  // TODO: walkObject 미구현...

  return context;
}
