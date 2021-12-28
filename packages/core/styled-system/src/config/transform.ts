import * as CSS from 'csstype';
import { Token, Length, t, transforms } from '../utils';
import { Config } from '../utils/prop-config';

export const transform: Config = {
  clipPath: true,
  transform: t.propT('transform', transforms.transform),
  transformOrigin: true,
  translateX: t.spaceT('--wallace-translate-x'),
  translateY: t.spaceT('--wallace-translate-y'),
  skewX: t.degreeT('--wallace-skew-x'),
  skewY: t.degreeT('--wallace-skew-y'),
  scaleX: t.prop('--wallace-scale-x'),
  scaleY: t.prop('--wallace-scale-y'),
  scale: t.prop(['--wallace-scale-x', '--wallace-scale-y']),
  rotate: t.degreeT('--wallace-rotate'),
};

export interface TransformProps {
  /**
   * ### CSS `transform` property
   */
  transform?: Token<CSS.Property.Transform | 'auto' | 'auto-gpu'>;
  /**
   * ### CSS `transform-origin` property
   */
  transformOrigin?: Token<CSS.Property.TransformOrigin | number, 'sizes'>;

  /**
   * ### CSS `clip-path` property.
   *
   * It creates a clipping region that sets what part of an element should be shown.
   */
  clipPath?: Token<CSS.Property.ClipPath>;

  /**
   * ### Translate value of an elements in the x-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--chakra-translate-x`
   */
  translateX?: Token<Length>;
  /**
   * ### Translate value of an elements in the y-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--chakra-translate-y`
   */
  translateY?: Token<Length>;

  /**
   * ### Sets the rotate value of the element
   */
  rotate?: Token<Length>;

  /**
   * ### Skew value of an elements in the x-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--chakra-skew-x`
   */
  skewX?: Token<Length>;
  /**
   * ### Skew value of an elements in the y-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--chakra-skew-y`
   */
  skewY?: Token<Length>;

  /**
   * ### Sets the scale value of the element
   */
  scale?: Token<Length>;
  /**
   * ### Scale value of an elements in the x-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--chakra-scale-x`
   */
  scaleX?: Token<Length>;
  /**
   * ### Scale value of an elements in the y-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--chakra-scale-y`
   */
  scaleY?: Token<Length>;
}
