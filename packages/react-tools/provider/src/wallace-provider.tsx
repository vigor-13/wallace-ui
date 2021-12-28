import * as React from 'react';
import { ThemeProviderProps, ThemeProvider } from '@wallace-ui/system';
import { Dict } from '@wallace-ui/utils';
import ResetCSS from '@wallace-ui/reset-css';

// ???
export interface WallaceProviderProps
  extends Pick<ThemeProviderProps, 'cssVarsRoot'> {
  /**
   * a theme. if omitted, uses the default theme provided by wallace.
   */
  theme?: Dict;

  /**
   * Common z-index to use for `Portal`.
   */
  portalZindex?: number;

  /**
   * If `true`, `CSSReset` component will be mounted to help you reset browser styles.
   *
   * @default true
   */
  resetCSS?: boolean;

  /**
   * Your application content.
   */
  children?: React.ReactNode;

  /**
   * TODO: 미구현...
   */
  colorModeManager?: any;

  /**
   * TODO: 미구현...
   */
  environment?: any;
}

/**
 * The global provider that must be added to make all Wallace components work correctly.
 */
export const WallaceProvider: React.FC<WallaceProviderProps> = (props) => {
  const {
    children,
    colorModeManager,
    portalZindex,
    resetCSS = true,
    theme = {},
    environment,
    cssVarsRoot,
  } = props;

  /**
   *  TODO: 미구현...
   *  - GlobalStyle
   *  - EnvironmentProvider
   *  - IdProvider
   *  - ColorModeProvider
   *  - PortalManager
   */

  return (
    <ThemeProvider theme={theme as Dict} cssVarsRoot={cssVarsRoot}>
      {resetCSS && <ResetCSS />}
      {children}
    </ThemeProvider>
  );
};
