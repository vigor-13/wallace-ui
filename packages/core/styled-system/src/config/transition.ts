import * as CSS from 'csstype';
import { t, Token } from '../utils';
import { Config } from '../utils/prop-config';

export const transition: Config = {
  transition: true,
  transitionDelay: true,
  animation: true,
  willChange: true,
  transitionDuration: t.prop('transitionDuration', 'transition.duration'),
  transitionProperty: t.prop('transitionProperty', 'transition.property'),
  transitionTimingFunction: t.prop('transitionTimingFunction', 'transition.easing'),
};

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
