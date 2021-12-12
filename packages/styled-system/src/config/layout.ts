import * as CSS from 'csstype';
import { Token, Length } from '../utils';

export const layout = {};

export interface LayoutProps {
  /****************************
   * ### CSS `display` property
   */
  display?: Token<CSS.Property.Display>;
  /**
   * ### CSS `display` property
   *
   * @deprecated - Please use `display` instead
   */
  d?: Token<CSS.Property.Display>;

  /***************************************
   * ### CSS `width` and `height` property
   */
  boxSize?: Token<CSS.Property.Width | number, 'sizes'>;

  /**************************
   * ### CSS `width` property
   */
  width?: Token<CSS.Property.Width | number, 'sizes'>;
  /**
   * ### CSS `width` property
   */
  w?: Token<CSS.Property.Width | number, 'sizes'>;
  inlineSize?: Token<CSS.Property.InlineSize | number, 'sizes'>;

  /******************************
   * ### CSS `max-width` property
   */
  maxWidth?: Token<CSS.Property.MaxWidth | number, 'sizes'>;
  /**
   * ### CSS `max-width` property
   */
  maxW?: Token<CSS.Property.MaxWidth | number, 'sizes'>;
  maxInlineSize?: Token<CSS.Property.MaxInlineSize | number, 'sizes'>;

  /******************************
   * ### CSS `min-width` property
   */
  minWidth?: Token<CSS.Property.MinWidth | number, 'sizes'>;
  /**
   * ### CSS `min-width` property
   */
  minW?: Token<CSS.Property.MinWidth | number, 'sizes'>;
  minInlineSize?: Token<CSS.Property.MinInlineSize | number, 'sizes'>;

  /***************************
   * ### CSS `height` property
   */
  height?: Token<CSS.Property.Height | number, 'sizes'>;
  /**
   * ### CSS `height` property
   */
  h?: Token<CSS.Property.Height | number, 'sizes'>;
  blockSize?: Token<CSS.Property.BlockSize | number, 'sizes'>;

  /*******************************
   * ### CSS `max-height` property
   */
  maxHeight?: Token<CSS.Property.MaxHeight | number, 'sizes'>;
  /**
   * ### CSS `max-height` property
   */
  maxH?: Token<CSS.Property.MaxHeight | number, 'sizes'>;
  maxBlockSize?: Token<CSS.Property.MaxBlockSize | number, 'sizes'>;

  /*******************************
   * ### CSS `min-height` property
   */
  minHeight?: Token<CSS.Property.MinHeight | number, 'sizes'>;
  /**
   * ### CSS `min-height` property
   */
  minH?: Token<CSS.Property.MinHeight | number, 'sizes'>;
  minBlockSize?: Token<CSS.Property.MinBlockSize | number, 'sizes'>;

  /***********************************
   * ### CSS `vertical-align` property
   */
  verticalAlign?: Token<CSS.Property.VerticalAlign<Length>>;

  /*****************************
   * ### CSS `overflow` property
   */
  overflow?: Token<CSS.Property.Overflow>;
  /**
   * ### CSS `overflow-x` property
   */
  overflowX?: Token<CSS.Property.OverflowX>;
  /**
   * ### CSS `overflow-y` property
   */
  overflowY?: Token<CSS.Property.OverflowY>;

  /*******************************
   * ### CSS `box-sizing` property
   */
  boxSizing?: CSS.Property.BoxSizing;

  /***********************************
   * ### CSS `box-decoration` property
   */
  boxDecorationBreak?: Token<CSS.Property.BoxDecorationBreak>;

  /**************************
   * ### CSS `float` property
   */
  float?: Token<CSS.Property.Float>;

  /*******************************
   * ### CSS `object-fit` property
   */
  objectFit?: Token<CSS.Property.ObjectFit>;

  /************************************
   * ### CSS `object-position` property
   */
  objectPosition?: Token<CSS.Property.ObjectPosition<Length>>;

  /****************************************
   * ### CSS `overscroll-behavior` property
   */
  overscrollBehavior?: Token<CSS.Property.OverscrollBehavior>;
  /**
   * ### CSS `overscroll-behavior-x` property
   */
  overscrollBehaviorX?: Token<CSS.Property.OverscrollBehaviorX>;
  /**
   * ### CSS `overscroll-behavior-y` property
   */
  overscrollBehaviorY?: Token<CSS.Property.OverscrollBehaviorY>;

  /****************************************
   * ### CSS `overscroll-behavior` property
   */
  overscroll?: Token<CSS.Property.OverscrollBehavior>;
  /**
   * ### CSS `overscroll-behavior-x` property
   */
  overscrollX?: Token<CSS.Property.OverscrollBehaviorX>;
  /**
   * ### CSS `overscroll-behavior-y` property
   */
  overscrollY?: Token<CSS.Property.OverscrollBehaviorY>;

  /*******************************
   * ### CSS `visibility` property
   */
  visibility?: Token<CSS.Property.Visibility>;

  /******************************
   * ### CSS `isolation` property
   */
  isolation?: Token<CSS.Property.Isolation>;
}
