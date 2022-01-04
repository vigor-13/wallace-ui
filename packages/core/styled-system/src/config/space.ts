import * as CSS from 'csstype';
import { Token, Length, t } from '../utils';
import { Config } from '../utils/prop-config';

export const space: Config = {
  margin: t.spaceT('margin'),
  marginTop: t.spaceT('marginTop'),
  marginBottom: t.spaceT('marginBottom'),
  marginLeft: t.spaceT('marginLeft'),
  marginRight: t.spaceT('marginRight'),
  marginBlockStart: t.spaceT('marginBlockStart'),
  marginBlockEnd: t.spaceT('marginBlockEnd'),
  marginInlineStart: t.spaceT('marginInlineStart'),
  marginInlineEnd: t.spaceT('marginInlineEnd'),
  marginX: t.spaceT(['marginInlineStart', 'marginInlineEnd']),
  marginY: t.spaceT(['marginTop', 'marginBottom']),
  marginInline: t.spaceT('marginInline'),
  marginBlock: t.spaceT('marginBlock'),
  padding: t.space('padding'),
  paddingTop: t.space('paddingTop'),
  paddingBottom: t.space('paddingBottom'),
  paddingLeft: t.space('paddingLeft'),
  paddingRight: t.space('paddingRight'),
  paddingBlockStart: t.space('paddingBlockStart'),
  paddingBlockEnd: t.space('paddingBlockEnd'),
  paddingInlineStart: t.space('paddingInlineStart'),
  paddingInlineEnd: t.space('paddingInlineEnd'),
  paddingX: t.space(['paddingInlineStart', 'paddingInlineEnd']),
  paddingY: t.space(['paddingTop', 'paddingBottom']),
  paddingInline: t.space('paddingInline'),
  paddingBlock: t.space('paddingBlock'),
};

Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mb: space.marginBottom,
  ml: space.marginLeft,
  mr: space.marginRight,
  ms: space.marginInlineStart,
  me: space.marginInlineEnd,
  mx: space.marginX,
  my: space.marginY,
  marginStart: space.marginInlineStart,
  marginEnd: space.marginInlineEnd,
  p: space.padding,
  pt: space.paddingTop,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  pr: space.paddingRight,
  ps: space.paddingInlineStart,
  pe: space.paddingInlineEnd,
  px: space.paddingX,
  py: space.paddingY,
  paddingStart: space.paddingInlineStart,
  paddingEnd: space.paddingInlineEnd,
});

export interface SpaceProps {
  /*******************************************
   * ### Margin on top, left, bottom and right
   */
  margin?: Token<CSS.Property.Margin | number, 'space'>;
  /**
   * ### Margin on top, left, bottom and right
   */
  m?: Token<CSS.Property.Margin | number, 'space'>;

  /******************************
   * ### Margin on left and right
   */
  marginX?: Token<CSS.Property.Margin | number, 'space'>;
  /**
   * Margin on left and right
   */
  mx?: Token<CSS.Property.Margin | number, 'space'>;

  /******************************
   * ### Margin on top and bottom
   */
  marginY?: Token<CSS.Property.Margin | number, 'space'>;
  /**
   * ### Margin on top and bottom
   */
  my?: Token<CSS.Property.Margin | number, 'space'>;

  /*******************
   * ### Margin on top
   */
  marginTop?: Token<CSS.Property.MarginTop | number, 'space'>;
  /**
   * ### Margin on top
   */
  mt?: Token<CSS.Property.Margin | number, 'space'>;

  /**********************
   * ### Margin on bottom
   */
  marginBottom?: Token<CSS.Property.MarginBottom | number, 'space'>;
  /**
   * ### Margin on bottom
   */
  mb?: Token<CSS.Property.MarginBottom | number, 'space'>;

  /********************
   * ### Margin on left
   */
  marginLeft?: Token<CSS.Property.MarginLeft | number, 'space'>;
  /**
   * ### Margin on left
   */
  ml?: Token<CSS.Property.MarginLeft | number, 'space'>;

  /*********************
   * ### Margin on right
   */
  marginRight?: Token<CSS.Property.MarginRight | number, 'space'>;
  /**
   * ### Margin on right
   */
  mr?: Token<CSS.Property.MarginRight | number, 'space'>;

  /**
   * When direction is `ltr`, `marginStart` is equivalent to `marginLeft`.
   * When direction is `rtl`, `marginStart` is equivalent to `marginRight`.
   */
  marginStart?: Token<CSS.Property.MarginInlineStart | number, 'space'>;
  /**
   * When direction is `ltr`, `marginEnd` is equivalent to `marginRight`.
   * When direction is `rtl`, `marginEnd` is equivalent to `marginLeft`.
   */
  marginEnd?: Token<CSS.Property.MarginInlineEnd | number, 'space'>;

  /**
   * When direction is `ltr`, `ms` is equivalent to `marginLeft`.
   * When direction is `rtl`, `ms` is equivalent to `marginRight`.
   */
  ms?: Token<CSS.Property.MarginInlineStart | number, 'space'>;
  /**
   * When direction is `ltr`, `me` is equivalent to `marginRight`.
   * When direction is `rtl`, `me` is equivalent to `marginLeft`.
   */
  me?: Token<CSS.Property.MarginInlineEnd | number, 'space'>;

  marginBlock?: Token<CSS.Property.MarginBlock | number, 'space'>;
  marginInline?: Token<CSS.Property.MarginInline | number, 'space'>;

  marginBlockStart?: Token<CSS.Property.MarginBlockStart | number, 'space'>;
  marginBlockEnd?: Token<CSS.Property.MarginBlockEnd | number, 'space'>;

  /**
   * When direction is `ltr`, `marginInlineStart` is equivalent to `marginLeft`.
   * When direction is `rtl`, `marginInlineStart` is equivalent to `marginRight`.
   */
  marginInlineStart?: Token<CSS.Property.MarginInlineStart | number, 'space'>;
  /**
   * When direction is `ltr`, `marginInlineEnd` is equivalent to `marginRight`.
   * When direction is `rtl`, `marginInlineEnd` is equivalent to `marginLeft`.
   */
  marginInlineEnd?: Token<CSS.Property.MarginInlineEnd | number, 'space'>;

  /********************************************
   * ### Padding on top, left, bottom and right
   */
  padding?: Token<CSS.Property.Padding | number, 'space'>;
  /**
   * ### Padding on top, left, bottom and right
   */
  p?: Token<CSS.Property.Padding | number, 'space'>;

  /********************
   * ### Padding on top
   */
  paddingTop?: Token<CSS.Property.PaddingTop | number, 'space'>;
  /**
   * ### Padding on top
   */
  pt?: Token<CSS.Property.PaddingTop | number, 'space'>;

  /***********************
   * ### Padding on bottom
   */
  paddingBottom?: Token<CSS.Property.PaddingBottom | number, 'space'>;
  /**
   * ### Padding on bottom
   */
  pb?: Token<CSS.Property.PaddingBottom | number, 'space'>;

  /*********************
   * ### Padding on left
   */
  paddingLeft?: Token<CSS.Property.PaddingLeft | number, 'space'>;
  /**
   * ### Padding on left
   */
  pl?: Token<CSS.Property.PaddingLeft | number, 'space'>;

  /**********************
   * ### Padding on right
   */
  paddingRight?: Token<CSS.Property.PaddingRight | number, 'space'>;
  /**
   * ### Padding on right
   */
  pr?: Token<CSS.Property.PaddingRight | number, 'space'>;

  paddingBlockStart?: Token<CSS.Property.PaddingBlockStart | number, 'space'>;
  paddingBlockEnd?: Token<CSS.Property.PaddingBlockEnd | number, 'space'>;

  /**
   * When direction is `ltr`, `paddingInlineStart` is equivalent to `paddingLeft`.
   * When direction is `rtl`, `paddingInlineStart` is equivalent to `paddingRight`.
   */
  paddingInlineStart?: Token<CSS.Property.PaddingInlineStart | number, 'space'>;
  /**
   * When direction is `ltr`, `paddingInlineEnd` is equivalent to `paddingRight`.
   * When direction is `rtl`, `paddingInlineEnd` is equivalent to `paddingLeft`.
   */
  paddingInlineEnd?: Token<CSS.Property.PaddingInlineEnd | number, 'space'>;

  /**
   * When direction is `ltr`, `paddingStart` is equivalent to `paddingLeft`.
   * When direction is `rtl`, `paddingStart` is equivalent to `paddingRight`.
   */
  paddingStart?: Token<CSS.Property.PaddingInlineStart | number, 'space'>;
  /**
   * When direction is `ltr`, `paddingEnd` is equivalent to `paddingRight`.
   * When direction is `rtl`, `paddingEnd` is equivalent to `paddingLeft`.
   */
  paddingEnd?: Token<CSS.Property.PaddingInlineEnd | number, 'space'>;

  /**
   * When direction is `ltr`, `ps` is equivalent to `paddingLeft`.
   * When direction is `rtl`, `ps` is equivalent to `paddingRight`.
   */
  ps?: Token<CSS.Property.PaddingInlineStart | number, 'space'>;
  /**
   * When direction is `ltr`, `pe` is equivalent to `paddingRight`.
   * When direction is `rtl`, `pe` is equivalent to `paddingLeft`.
   */
  pe?: Token<CSS.Property.PaddingInlineEnd | number, 'space'>;

  paddingInline?: Token<CSS.Property.PaddingInline | number, 'space'>;
  paddingBlock?: Token<CSS.Property.PaddingBlock | number, 'space'>;

  /**
   * ### Padding on left and right
   */
  px?: Token<CSS.Property.Padding | number, 'space'>;
  /**
   * ### Padding on top and bottom
   */
  py?: Token<CSS.Property.Padding | number, 'space'>;

  /**
   * ### Padding on left and right
   */
  paddingX?: Token<CSS.Property.Padding | number, 'space'>;
  /**
   * ### Padding on top and bottom
   */
  paddingY?: Token<CSS.Property.Padding | number, 'space'>;
}
