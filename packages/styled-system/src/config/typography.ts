import * as CSS from 'csstype';
import { Token, ResponsiveValue } from '../utils';

export const typography = {};

export interface TypographyProps {
  /**
   * ### CSS `font-size` property
   */
  fontSize?: Token<CSS.Property.FontSize | number, 'fontSizes'>;
  /**
   * ### CSS `font-weight` property
   */
  fontWeight?: Token<number | (string & {}), 'fontWeights'>;
  /**
   * ### CSS `font-family` property
   */
  fontFamily?: Token<CSS.Property.FontFamily, 'fonts'>;
  /**
   * ### CSS `font-style` property
   */
  fontStyle?: Token<CSS.Property.FontStyle>;

  /**
   * ### CSS `line-height` property
   */
  lineHeight?: Token<CSS.Property.LineHeight | number, 'lineHeights'>;

  /**
   * ### CSS `letter-spacing` property
   */
  letterSpacing?: Token<CSS.Property.LetterSpacing | number, 'letterSpacings'>;

  /**
   * ### CSS `text-align` property
   */
  textAlign?: Token<CSS.Property.TextAlign>;

  /**
   * ### CSS `word-break` property
   */
  wordBreak?: Token<CSS.Property.WordBreak>;

  /**
   * ### CSS `overflow-wrap` property
   */
  overflowWrap?: Token<CSS.Property.OverflowWrap>;

  /**
   * ### CSS `text-overflow` property
   */
  textOverflow?: Token<CSS.Property.TextOverflow>;

  /**
   * ### CSS `text-transform` property
   */
  textTransform?: Token<CSS.Property.TextTransform>;

  /**
   * ### CSS `white-space` property
   */
  whiteSpace?: Token<CSS.Property.WhiteSpace>;

  /**
   * Used to visually truncate a text after a number of lines.
   */
  noOfLines?: ResponsiveValue<number>;

  /**
   * If `true`, it clamps truncate a text after one line.
   * @deprecated - Use `noOfLines` instead
   */
  isTruncated?: boolean;
}
