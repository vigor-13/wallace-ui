import * as CSS from 'csstype';
import { Token } from '../utils';

export const transition = {};

export interface TransitionProps {
  /**
   * ### CSS `transition` property
   */
  transition?: Token<CSS.Property.Transition>;
  /**
   * ### CSS `transition-property` property
   */
  transitionProperty?: Token<CSS.Property.TransitionProperty>;
  /**
   * ### CSS `transition-timing-function` property
   */
  transitionTimingFunction?: Token<CSS.Property.TransitionTimingFunction>;
  /**
   * ### CSS `transition-duration` property
   */
  transitionDuration?: Token<string>;
  /**
   * ### CSS `transition-delay` property
   */
  transitionDelay?: Token<CSS.Property.TransitionDelay>;

  /**
   * ### CSS `animation` property
   */
  animation?: Token<CSS.Property.Animation>;

  /**
   * ### CSS `will-change` property
   */
  willChange?: Token<CSS.Property.WillChange>;
}
