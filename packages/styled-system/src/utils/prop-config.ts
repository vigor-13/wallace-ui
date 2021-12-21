import * as CSS from 'csstype';
import { Dict } from '@wallace-ui/utils';

/**
 * ???
 */
export interface PropConfig {
  /**
   * This is useful for props that need to leverage CSS variables
   * Static styles to append to the computed styles.
   *
   * It does not get replicated if value is responsive or styles are nested.
   */
  static?: Dict;

  // TODO: ...
}

/**
 * ???
 */
export type Config = Record<string, PropConfig | true>;
