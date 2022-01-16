import * as CSS from 'csstype';
import { t, Token } from '../utils';
import { Config } from '../utils/prop-config';

export const color: Config = {
  color: t.colors('color'),
  textColor: t.colors('color'),
  fill: t.colors('fill'),
  stroke: t.colors('stroke'),
};

export interface ColorProps {
  /**
   * CSS `color` property
   */
  textColor?: Token<CSS.Property.Color, 'colors'>;
  /**
   * CSS `color` property
   */
  color?: Token<CSS.Property.Color, 'colors'>;
  /**
   * CSS `fill` property for icon svgs and paths
   */
  fill?: Token<CSS.Property.Color, 'colors'>;
  /**
   * CSS `stroke` property for icon svgs and paths
   */
  stroke?: Token<CSS.Property.Color, 'colors'>;
}
