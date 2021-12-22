import * as CSS from 'csstype';
import { Dict } from '@wallace-ui/utils';
import { CssTheme, Transform } from '.';
import { ThemeScale } from '../create-theme-vars';
import { createTransform } from './create-transform';

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
   * The theme scale this maps to
   */
  scale?: ThemeScale;

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
}

/**
 * ???
 */
export type Config = Record<string, PropConfig | true>;

// ???
export function toConfig(scale: ThemeScale, transform?: Transform) {
  // TODO: ...
  return <T extends CSSProp>(property: T | T[]) => {
    const result: PropConfig = { property, scale };
    result.transform = createTransform({
      scale,
      transform,
    });

    return result;
  };
}
