import * as CSS from 'csstype';
import { Token, ResponsiveValue, t } from '../utils';
import { Config } from '../utils/prop-config';

export const textDecoration: Config = {
  textDecoration: true,
  textDecor: { property: 'textDecoration' },
  textDecorationColor: t.colors('textDecorationColor'),
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationThickness: true,
  textUnderlineOffset: true,
  textShadow: t.shadows('textShadow'),
};

export interface TextDecorationProps {
  /************************************
   * ### CSS `text-decoration` property
   */
  textDecoration?: Token<CSS.Property.TextDecoration | number>;
  /**
   * ### CSS `text-decoration` property
   */
  textDecor?: Token<CSS.Property.TextDecoration | number>;

  /**
   * ### CSS `text-decoration-color` property
   */
  textDecorationColor?: Token<CSS.Property.TextDecorationColor, 'colors'>;

  /**
   * ### CSS `text-decoration-thickness` property
   */
  textDecorationThickness?: ResponsiveValue<CSS.Property.TextDecorationThickness>;

  /**
   * ### CSS `text-decoration-style` property
   */
  textDecorationStyle?: ResponsiveValue<CSS.Property.TextDecorationStyle>;

  /**
   * ### CSS `text-decoration-line` property
   */
  textDecorationLine?: ResponsiveValue<CSS.Property.TextDecorationLine>;

  /**
   * ### CSS `text-underline-offset` property
   */
  textUnderlineOffset?: ResponsiveValue<CSS.Property.TextUnderlineOffset>;

  /**
   * ### `text-shadow` property
   */
  textShadow?: Token<CSS.Property.TextShadow | number, 'shadows'>;
}
