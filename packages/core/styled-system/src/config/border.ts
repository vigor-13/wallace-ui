import * as CSS from 'csstype';
import { t, Token } from '../utils';
import { Config } from '../utils/prop-config';

export const border: Config = {
  // border
  border: t.borders('border'),
  borderTop: t.borders('borderTop'),
  borderBottom: t.borders('borderBottom'),
  borderLeft: t.borders('borderLeft'),
  borderRight: t.borders('borderRight'),
  borderX: t.borders(['borderLeft', 'borderRight']),
  borderY: t.borders(['borderTop', 'borderBottom']),
  borderBlock: t.borders('borderBlock'),
  borderInline: t.borders('borderInline'),
  borderBlockStart: t.borders('borderBlockStart'),
  borderBlockEnd: t.borders('borderBlockEnd'),
  borderInlineStart: {
    property: 'borderInlineStart',
    scale: 'borders',
  },
  borderInlineEnd: t.borders('borderInlineEnd'),

  // border-width
  borderWidth: t.borderWidths('borderWidth'),
  borderTopWidth: t.borderWidths('borderTopWidth'),
  borderBottomWidth: t.borderWidths('borderBottomWidth'),
  borderLeftWidth: t.borderWidths('borderLeftWidth'),
  borderRightWidth: t.borderWidths('borderRightWidths'),
  borderBlockStartWidth: t.borderWidths('borderBlockStartWidth'),
  borderBlockEndWidth: t.borderWidths('borderBlockEndWidth'),
  borderInlineStartWidth: t.borderWidths('borderInlineStartWidth'),
  borderInlineEndWidth: t.borderWidths('borderInlineEndWidth'),

  // border-style
  borderStyle: t.borderStyles('borderStyle'),
  borderTopStyle: t.borderStyles('borderTopStyle'),
  borderBottomStyle: t.borderStyles('borderBottomStyle'),
  borderLeftStyle: t.borderStyles('borderLeftStyle'),
  borderRightStyle: t.borderStyles('borderRightStyle'),
  borderBlockStartStyle: t.borderStyles('borderBlockStartStyle'),
  borderBlockEndStyle: t.borderStyles('borderBlockEndStyle'),
  borderInlineStartStyle: t.borderStyles('borderInlineStartStyle'),
  borderInlineEndStyle: t.borderStyles('borderInlineEndStyle'),

  // border-color
  borderColor: t.colors('borderColor'),
  borderTopColor: t.colors('borderTopColor'),
  borderBottomColor: t.colors('borderBottomColor'),
  borderLeftColor: t.colors('borderLeftColor'),
  borderRightColor: t.colors('borderRightColor'),
  borderBlockStartColor: t.colors('borderBlockStartColor'),
  borderBlockEndColor: t.colors('borderBlockEndColor'),
  borderInlineStartColor: t.colors('borderInlineStartColor'),
  borderInlineEndColor: t.colors('borderInlineEndColor'),

  // border-radius
  borderRadius: t.radii('borderRadius'),
  borderTopRadius: t.radii(['borderTopLeftRadius', 'borderTopRightRadius']),
  borderBottomRadius: t.radii(['borderBottomLeftRadius', 'borderBottomRightRadius']),
  borderLeftRadius: t.radii(['borderTopLeftRadius', 'borderBottomLeftRadius']),
  borderRightRadius: t.radii(['borderTopRightRadius', 'borderBottomRightRadius']),
  borderTopLeftRadius: t.radii('borderTopLeftRadius'),
  borderTopRightRadius: t.radii('borderTopRightRadius'),
  borderBottomLeftRadius: t.radii('borderBottomLeftRadius'),
  borderBottomRightRadius: t.radii('borderBottomRightRadius'),
  borderStartStartRadius: t.logical({
    scale: 'radii',
    property: {
      ltr: 'borderTopLeftRadius',
      rtl: 'borderTopRightRadius',
    },
  }),
  borderStartEndRadius: t.logical({
    scale: 'radii',
    property: {
      ltr: 'borderTopRightRadius',
      rtl: 'borderTopLeftRadius',
    },
  }),
  borderEndStartRadius: t.logical({
    scale: 'radii',
    property: {
      ltr: 'borderBottomLeftRadius',
      rtl: 'borderBottomRightRadius',
    },
  }),
  borderEndEndRadius: t.logical({
    scale: 'radii',
    property: {
      ltr: 'borderBottomRightRadius',
      rtl: 'borderBottomLeftRadius',
    },
  }),
  borderInlineStartRadius: t.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
      rtl: ['borderTopRightRadius', 'borderBottomRightRadius'],
    },
  }),
  borderInlineEndRadius: t.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopRightRadius', 'borderBottomRightRadius'],
      rtl: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    },
  }),
};

Object.assign(border, {
  // border
  borderStart: border.borderInlineStart,
  borderEnd: border.borderInlineEnd,

  // border-color
  borderStartColor: border.borderInlineStartColor,
  borderEndColor: border.borderInlineEndColor,

  // border-style
  borderStartStyle: border.borderInlineStartStyle,
  borderEndStyle: border.borderInlineEndStyle,

  // border-width
  borderStartWidth: border.borderInlineStartWidth,
  borderEndWidth: border.borderInlineEndWidth,

  // border-radius
  borderStartRadius: border.borderInlineStartRadius,
  borderEndRadius: border.borderInlineEndRadius,
  borderTopStartRadius: border.borderStartStartRadius,
  borderTopEndRadius: border.borderStartEndRadius,
  borderBottomStartRadius: border.borderEndStartRadius,
  borderBottomEndRadius: border.borderEndEndRadius,
  rounded: border.borderRadius,
  roundedTop: border.borderTopRadius,
  roundedBottom: border.borderBottomRadius,
  roundedLeft: border.borderLeftRadius,
  roundedRight: border.borderRightRadius,
  roundedStart: border.borderInlineStartRadius,
  roundedEnd: border.borderInlineEndRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedTopStart: border.borderStartStartRadius,
  roundedTopEnd: border.borderStartEndRadius,
  roundedBottomStart: border.borderEndStartRadius,
  roundedBottomEnd: border.borderEndEndRadius,
});

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

  /**
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

  /**
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

  /**
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

  /**
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

  /**
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

  /**
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

  /**
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

  /**
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
