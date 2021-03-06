import * as CSS from 'csstype';
import { t, Token } from '../utils';
import { Config } from '../utils/prop-config';

export const position: Config = {
  position: true,
  pos: t.prop('position'),
  zIndex: t.prop('zIndex', 'zIndices'),
  inset: t.spaceT('inset'),
  insetX: t.spaceT(['left', 'right']),
  insetY: t.spaceT(['top', 'bottom']),
  insetInline: t.spaceT('insetInline'),
  insetBlock: t.spaceT('insetBlock'),
  top: t.spaceT('top'),
  bottom: t.spaceT('bottom'),
  left: t.spaceT('left'),
  right: t.spaceT('right'),
  insetBlockStart: t.spaceT('insetBlockStart'),
  insetBlockEnd: t.spaceT('insetBlockEnd'),
  insetInlineStart: t.logical({
    scale: 'space',
    property: { ltr: 'left', rtl: 'right' },
  }),
  insetInlineEnd: t.logical({
    scale: 'space',
    property: { ltr: 'right', rtl: 'left' },
  }),
};

Object.assign(position, {
  insetStart: position.insetInlineStart,
  insetEnd: position.insetInlineEnd,
});

export interface PositionProps {
  /**
   * ### CSS `z-index` property
   */
  zIndex?: Token<CSS.Property.ZIndex, 'zIndices'>;

  /**
   * ### CSS `top` property
   */
  top?: Token<CSS.Property.Top | number, 'sizes'>;

  /**
   * ### CSS `bottom` property
   */
  bottom?: Token<CSS.Property.Bottom | number, 'sizes'>;

  /**
   * ### CSS `left` property
   */
  left?: Token<CSS.Property.Left | number, 'sizes'>;

  /**
   * ### CSS `right` property
   */
  right?: Token<CSS.Property.Right | number, 'sizes'>;

  /**
   * ### CSS `left`, `right`, `top`, `bottom` property
   */
  inset?: Token<CSS.Property.Inset | number, 'sizes'>;
  /**
   * When the direction is `start`, `end` is equivalent to `left`.
   * When the direction is `start`, `end` is equivalent to `right`.
   */
  insetStart?: Token<CSS.Property.InsetInlineStart | number, 'sizes'>;
  /**
   * When the direction is `ltr`, `insetEnd` is equivalent to `right`.
   * When the direction is `rtl`, `insetEnd` is equivalent to `left`.
   */
  insetEnd?: Token<CSS.Property.InsetInlineEnd | number, 'sizes'>;

  insetInline?: Token<CSS.Property.InsetInline>;
  insetBlock?: Token<CSS.Property.InsetBlock>;

  insetInlineStart?: Token<CSS.Property.InsetInlineStart | number, 'sizes'>;
  insetBlockStart?: Token<CSS.Property.InsetBlockStart | number, 'sizes'>;

  /**
   * When the direction is `ltr`, `insetInlineEnd` is equivalent to `right`.
   * When the direction is `rtl`, `insetInlineEnd` is equivalent to `left`.
   */
  insetInlineEnd?: Token<CSS.Property.InsetInlineEnd | number, 'sizes'>;
  insetBlockEnd?: Token<CSS.Property.InsetBlockEnd | number, 'sizes'>;

  /**
   * ### CSS `left`, and `right` property
   */
  insetX?: Token<CSS.Property.Inset | number, 'sizes'>;
  /**
   * ### CSS `top`, and `bottom` property
   */
  insetY?: Token<CSS.Property.Inset | number, 'sizes'>;

  /**
   * ### CSS `position` property
   */
  pos?: Token<CSS.Property.Position>;
  /**
   * ### CSS `position` property
   */
  position?: Token<CSS.Property.Position>;
}
