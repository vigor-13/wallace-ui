import * as CSS from 'csstype';
import { Token } from '../utils';

export const effect = {};

export interface EffectProps {
  /***************************
   * `box-shadow` property
   */
  boxShadow?: Token<CSS.Property.BoxShadow | number, 'shadows'>;
  /**
   * `box-shadow` property
   */
  shadow?: Token<CSS.Property.BoxShadow | number, 'shadows'>;

  /******************************
   * `mix-blend-mode` proeprty
   */
  mixBlendMode?: Token<CSS.Property.MixBlendMode>;

  /***********************
   * `blend-mode` property
   */
  blendMode?: Token<CSS.Property.MixBlendMode>;

  /**************************************
   * CSS `background-blend-mode` property
   */
  backgroundBlendMode?: Token<CSS.Property.BackgroundBlendMode>;
  /**
   * CSS `background-blend-mode` property
   */
  bgBlendMode?: Token<CSS.Property.BackgroundBlendMode>;

  /************************
   * CSS `opacity` property
   */
  opacity?: Token<CSS.Property.Opacity>;
}
