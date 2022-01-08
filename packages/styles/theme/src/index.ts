import { ThemeConfig } from './theme.types';
import components from './components';
import foundations from './foundations';
import styles from './styles';

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
  styles,
  config,
};

export type Theme = typeof theme;
export * from './theme.types';
export * from './utils';
export default theme;
