import * as CSS from 'csstype';
import { Dict } from '@wallace-ui/utils';
import { CssTheme, Transform } from '.';

// ???
type CSSProp = keyof CSS.Properties | (string & {});
type MaybeArray<T> = T | T[];
type MaybeThemeFunction<T> = T | ((theme: CssTheme) => T);
type StringUnion<T> = T | (string & {});

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

  /**
   * CSS property or CSS variable the prop maps to
   */
  property?: MaybeThemeFunction<MaybeArray<StringUnion<CSSProp>>>;

  /**
   * Function to transform the value passed
   */
  transform?: Transform;

  /**
   * Useful for `layerStyle`, tex`tStyle` and `apply` where their
   * transform function returns theme aware styles
   */
  processResult?: boolean;

  // TODO: ...
}

/**
 * ???
 */
export type Config = Record<string, PropConfig | true>;
