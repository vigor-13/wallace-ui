import * as CSS from 'csstype';
import { Token, Length, transforms, t } from '../utils';
import { Config } from '../utils/prop-config';

export const ring: Config = {
  ring: { transform: transforms.ring },
  ringColor: t.colors('--wallace-ring-color'),
  ringOffset: t.prop('--wallace-ring-offset-width'),
  ringOffsetColor: t.colors('--wallace-ring-offset-color'),
  ringInset: t.prop('--wallace-ring-inset'),
};

export interface RingProps {
  /**
   * Creates outline rings with CSS `box-shadow` property
   */
  ring?: Token<Length>;
  /**
   * The color of the outline ring
   */
  ringColor?: Token<CSS.Property.Color, 'colors'>;
  /**
   * The thickness of the offset shadow when using outline rings
   */
  ringOffset?: Token<Length>;
  /**
   * The color of the offset shadow when adding outline rings
   */
  ringOffsetColor?: Token<CSS.Property.Color, 'colors'>;
  /**
   * If the outline ring should an `inset`
   */
  ringInset?: Token<'inset' | 'none'>;
}
