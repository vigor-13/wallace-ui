import * as CSS from 'csstype';
import { Token } from '../utils';

export const color = {};

export interface ColorProps {
  /**********************
   * CSS `color` property
   */
  textColor?: Token<CSS.Property.Color, 'colors'>;
  /**
   * CSS `color` property
   */
  color?: Token<CSS.Property.Color, 'colors'>;
  /********************************************
   * CSS `fill` property for icon svgs and paths
   */
  fill?: Token<CSS.Property.Color, 'colors'>;
  /**
   * CSS `stroke` property for icon svgs and paths
   */
  stroke?: Token<CSS.Property.Color, 'colors'>;
}
