import { ThemeConfig } from './theme.types';
import components from './components';
import foundations from './foundations';

const config: ThemeConfig = {
  cssVarPrefix: 'wallace',
};

/**
 * TODO: 미구현 ...
 *  - direction
 *  - styles
 */
export const theme = {
  ...foundations,
  components,
  config,
};

export type Theme = typeof theme;

export default theme;
