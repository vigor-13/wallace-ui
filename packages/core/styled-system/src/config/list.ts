import * as CSS from 'csstype';
import { ResponsiveValue, t } from '../utils';
import { Config } from '../utils/prop-config';

export const list: Config = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: t.prop('listStylePosition'),
  listStyleImage: true,
  listStyleImg: t.prop('listStyleImage'),
};

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
