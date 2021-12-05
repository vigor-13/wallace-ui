import * as CSS from 'csstype';
import { Dict } from '@wallace-ui/utils';

/**
 * ???
 */
export interface PropConfig {
  static?: Dict;
}

/**
 * ???
 */
export type Config = Record<string, PropConfig | true>;
