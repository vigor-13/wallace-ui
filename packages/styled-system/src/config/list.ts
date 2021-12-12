import * as CSS from 'csstype';
import { ResponsiveValue } from '../utils';

export const list = {};

export interface ListProps {
  listStyleType?: ResponsiveValue<CSS.Property.ListStyleType>;
  /**
   * ### CSS `list-style-position` property
   */
  listStylePosition?: ResponsiveValue<CSS.Property.ListStylePosition>;
  /**
   * ### CSS `list-style-position` property
   */
  listStylePos?: ResponsiveValue<CSS.Property.ListStylePosition>;
  /**
   * ### CSS `list-style-image` property
   */
  listStyleImage?: ResponsiveValue<CSS.Property.ListStyleImage>;
  /**
   * ### CSS `list-style-image` property
   */
  listStyleImg?: ResponsiveValue<CSS.Property.ListStyleImage>;
}
