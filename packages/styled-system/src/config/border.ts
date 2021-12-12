import * as CSS from 'csstype';
import { Token } from '../utils';

export const border = {};

/**
 * border 관련 프로퍼티
 */
export interface BorderProps {
  /**
   * CSS `border` property
   */
  border?: Token<CSS.Property.Border | number, 'borders'>;
  /**
   * CSS `border-width` property
   */
  borderWidth?: Token<CSS.Property.BorderWidth | number>;
  /**
   * CSS `border-style` proeprty
   */
  borderStyle?: Token<CSS.Property.BorderStyle>;
  /**
   * CSS `border-color` property
   */
  borderColor?: Token<CSS.Property.BorderColor, 'colors'>;
  /**
   * CSS `border-radius` property
   */
  borderRadius?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  /**
   * CSS `border-radius` property
   */
  rounded?: Token<CSS.Property.BorderRadius | number, 'radii'>;

  /***************************
   * CSS `border-top` property
   */
  borderTop?: Token<CSS.Property.BorderTop | number, 'borders'>;
  borderBlockStart?: Token<CSS.Property.BorderBlockStart | number>;
  /**
   * CSS `border-bottom` property
   */
  borderBottom?: Token<CSS.Property.BorderBottom | number, 'borders'>;
  borderBlockEnd?: Token<CSS.Property.BorderBlockEnd | number>;
  /**
   * CSS `border-left` property
   */
  borderLeft?: Token<CSS.Property.BorderLeft | number, 'borders'>;
  borderStart?: Token<CSS.Property.BorderInlineStart | number>;
  borderInlineStart?: Token<CSS.Property.BorderInlineStart | number>;
  /**
   * CSS `border-right` property
   */
  borderRight?: Token<CSS.Property.BorderRight | number, 'borders'>;
  borderEnd?: Token<CSS.Property.BorderInlineEnd | number>;
  borderInlineEnd?: Token<CSS.Property.BorderInlineEnd | number>;

  /*********************************
   * CSS `border-top-width` property
   */
  borderTopWidth?: Token<CSS.Property.BorderWidth | number>;
  borderBlockStartWidth?: Token<CSS.Property.BorderBlockStartWidth | number>;
  /**
   * CSS `border-bottom-width` property
   */
  borderBottomWidth?: Token<CSS.Property.BorderWidth | number>;
  borderBlockEndWidth?: Token<CSS.Property.BorderBlockEndWidth | number>;
  /**
   * CSS `border-left-width` property
   */
  borderLeftWidth?: Token<CSS.Property.BorderWidth | number>;
  borderStartWidth?: Token<CSS.Property.BorderWidth | number>;
  borderInlineStartWidth?: Token<CSS.Property.BorderInlineStartWidth | number>;
  /**
   * CSS `border-right-width` property
   */
  borderRightWidth?: Token<CSS.Property.BorderWidth | number>;
  borderEndWidth?: Token<CSS.Property.BorderWidth | number>;
  borderInlineEndWidth?: Token<CSS.Property.BorderInlineEndWidth | number>;

  /*********************************
   * CSS `border-top-style` property
   */
  borderTopStyle?: Token<CSS.Property.BorderTopStyle>;
  borderBlockStartStyle?: Token<CSS.Property.BorderBlockStartStyle>;
  /**
   * CSS `border-bottom-style` property
   */
  borderBottomStyle?: Token<CSS.Property.BorderBottomStyle>;
  borderBlockEndStyle?: Token<CSS.Property.BorderBlockEndStyle>;
  /**
   * CSS `border-left-style` property
   */
  borderLeftStyle?: Token<CSS.Property.BorderLeftStyle>;
  borderStartStyle?: Token<CSS.Property.BorderInlineStartStyle>;
  borderInlineStartStyle?: Token<CSS.Property.BorderInlineStartStyle>;
  /**
   * CSS `border-right-style` property
   */
  borderRightStyle?: Token<CSS.Property.BorderRightStyle>;
  borderEndStyle?: Token<CSS.Property.BorderInlineEndStyle>;
  borderInlineEndStyle?: Token<CSS.Property.BorderInlineEndStyle>;

  /*********************************
   * CSS `border-top-color` property
   */
  borderTopColor?: Token<CSS.Property.BorderTopColor, 'colors'>;
  borderBlockStartColor?: Token<CSS.Property.BorderBlockStartColor, 'colors'>;
  /**
   * CSS `border-bottom-color` property
   */
  borderBottomColor?: Token<CSS.Property.BorderBottomColor, 'colors'>;
  borderBlockEndColor?: Token<CSS.Property.BorderBlockEndColor, 'colors'>;
  /**
   * CSS `border-left-color` property
   */
  borderLeftColor?: Token<CSS.Property.BorderLeftColor, 'colors'>;
  borderStartColor?: Token<CSS.Property.BorderInlineStartColor, 'colors'>;
  borderInlineStartColor?: Token<CSS.Property.BorderInlineStartColor, 'colors'>;
  /**
   * CSS `border-right-color` property
   */
  borderRightColor?: Token<CSS.Property.BorderRightColor, 'colors'>;
  borderEndColor?: Token<CSS.Property.BorderInlineEndColor, 'colors'>;
  borderInlineEndColor?: Token<CSS.Property.BorderInlineEndColor, 'colors'>;

  /**********************************
   * CSS `border-top-radius` property
   */
  borderTopRadius?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  /**
   * CSS `border-bottom-radius` proeprty
   */
  borderBottomRadius?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  /**
   * CSS `border-left-radius` proeprty
   */
  borderleftRadius?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  /**
   * CSS `border-right-radius` proeprty
   */
  borderRightRadius?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  /**
   * CSS `border-top-radius` property
   */
  roundedTop?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  /**
   * CSS `border-bottom-radius` proeprty
   */
  roundedBottom?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  /**
   * CSS `border-left-radius` proeprty
   */
  roundedLeft?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  /**
   * CSS `border-right-radius` proeprty
   */
  roundedRight?: Token<CSS.Property.BorderRadius | number, 'radii'>;

  /***************************************************************************
   * When direction is `ltr`, `roundedEnd` is equivalent to `borderRightRadius`.
   * When direction is `rtl`, `roundedEnd` is equivalent to `borderLeftRadius`.
   */
  roundedEnd?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  /**
   * When direction is `ltr`, `roundedStart` is equivalent to `borderRightRadius`.
   * When direction is `rtl`, `roundedStart` is equivalent to `borderLeftRadius`.
   */
  roundedStart?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  /**
   * When direction is `ltr`, `borderEndRadius` is equivalent to `borderRightRadius`.
   * When direction is `rtl`, `borderEndRadius` is equivalent to `borderLeftRadius`.
   */
  borderEndRadius?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  /**
   * When direction is `ltr`, `borderStartRadius` is equivalent to `borderLeftRadius`.
   * When direction is `rtl`, `borderStartRadius` is equivalent to `borderRightRadius`.
   */
  borderStartRadius?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  /**
   * When direction is `ltr`, `borderInlineEndRadius` is equivalent to `borderRightRadius`.
   * When direction is `rtl`, `borderInlineEndRadius` is equivalent to `borderLeftRadius`.
   */
  borderInlineEndRadius?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  /**
   * When direction is `ltr`, `borderInlineStartRadius` is equivalent to `borderLeftRadius`.
   * When direction is `rtl`, `borderInlineStartRadius` is equivalent to `borderRightRadius`.
   */
  borderInlineStartRadius?: Token<CSS.Property.BorderRadius | number, 'radii'>;

  /********************************
   * CSS `border-top-left-radius` property
   */
  borderTopLeftRadius?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  borderTopStartRadius?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  borderStartStartRadius?: Token<
    CSS.Property.BorderStartStartRadius | number,
    'radii'
  >;
  /**
   * CSS `border-top-right-radius` property
   */
  borderTopRightRadius?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  borderTopEndRadius?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  borderStartEndRadius?: Token<CSS.Property.BorderStartEndRadius | number, 'radii'>;
  /**
   * CSS `border-bottom-left-radius` property
   */
  borderBottomLeftRadius?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  borderBottomStartRadius?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  borderEndStartRadius?: Token<CSS.Property.BorderEndStartRadius | number, 'radii'>;
  /**
   * CSS `border-bottom-right-radius` property
   */
  borderBottomRightRadius?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  borderBottomEndRadius?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  borderEndEndRadius?: Token<CSS.Property.BorderEndEndRadius | number, 'radii'>;
  /**
   * CSS `border-top-left-radius` property
   */
  roundedTopLeft?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  roundedTopStart?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  /**
   * CSS `border-top-right-radius` property
   */
  roundedTopRight?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  roundedTopEnd?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  /**
   * CSS `border-bottom-left-radius` proeperty
   */
  roundedBottomLeft?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  roundedBottomStart?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  /**
   * CSS `border-bottom-right-radius` proeprty
   */
  roundedBottomRight?: Token<CSS.Property.BorderRadius | number, 'radii'>;
  roundedBottomEnd?: Token<CSS.Property.BorderRadius | number, 'radii'>;

  /*******************************************
   * CSS `border-right & border-left` property
   */
  borderX?: Token<CSS.Property.Border | number, 'borders'>;
  borderInline?: Token<CSS.Property.BorderInline | number>;
  /**
   * CSS `border-top & border-bottom` property
   */
  borderY?: Token<CSS.Property.Border | number, 'borders'>;
  borderBlock?: Token<CSS.Property.BorderBlock | number>;
}
