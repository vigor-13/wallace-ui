import { ThemeConfig } from './theme.types';
import components from './components';

const config: ThemeConfig = {
  cssVarPrefix: 'wallace',
};

/**
 * TODO: 미구현 ...
 *  - direction
 *  - styles
 *  - foundations
 */
export const theme = {
  components,
  config,
};

export type Theme = typeof theme;

export default theme;
