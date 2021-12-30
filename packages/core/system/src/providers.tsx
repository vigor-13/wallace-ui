import * as React from 'react';
import {
  Global,
  ThemeContext,
  ThemeProvider as EmotionThemeProvider,
  ThemeProviderProps as EmotionThemeProviderProps,
} from '@emotion/react';
import { Dict } from '@wallace-ui/utils';
import { WithCSSVar } from '@wallace-ui/styled-system/src/utils';
import { toCSSVar } from '@wallace-ui/styled-system';

// ???
export interface ThemeProviderProps extends EmotionThemeProviderProps {
  /**
   * The element to attach the CSS custom properties to.
   * @default ":host, :root"
   */
  cssVarsRoot?: string;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { cssVarsRoot = ':host, :root', theme, children } = props;
  const computedTheme = React.useMemo(() => toCSSVar(theme), [theme]);

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <Global styles={(theme: any) => ({ [cssVarsRoot]: theme.__cssVars })} />
      {children}
    </EmotionThemeProvider>
  );
};

// ???
export function useTheme<T extends object = Dict>() {
  const theme = React.useContext(
    ThemeContext as unknown as React.Context<T | undefined>
  );

  if (!theme) {
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<WallaceProvider />` or `<ThemeProvider />`'
    );
  }

  return theme as WithCSSVar<T>;
}
