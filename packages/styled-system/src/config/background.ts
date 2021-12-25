import * as CSS from 'csstype';
import { t, Token, transforms } from '../utils';
import { Config } from '../utils/prop-config';

export const background: Config = {
  background: t.colors('background'),
  backgroundColor: t.colors('backgroundColor'),
  backgroundImage: t.propT('backgroundImage', transforms.bgImage),
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundClip: { transform: transforms.bgClip },
  bg: t.colors('background'),
  bgColor: t.colors('backgroundColor'),
  bgSize: t.prop('backgroundSize'),
  bgPosition: t.prop('backgroundPosition'),
  bgPos: t.prop('backgroundPosition'),
  bgRepeat: t.prop('backgroundRepeat'),
  bgAttachment: t.prop('backgroundAttachment'),
  bgGradient: t.propT('backgroundImage', transforms.gradient),
  bgClip: { transform: transforms.bgClip },
};

Object.assign(background, {
  bgImage: background.backgroundImage,
  bgImg: background.backgroundImage,
});

export interface BackgroundProps {
  /**
   * CSS의 background 프로퍼티
   */
  bg?: Token<CSS.Property.Color, 'colors'>;

  /**
   * CSS의 background 프로퍼티
   */
  background?: Token<CSS.Property.Color, 'colors'>;

  /**
   * CSS의 background-clip 프로퍼티
   */
  bgClip?: Token<CSS.Property.BackgroundClip | 'text'>;

  /**
   * CSS의 background-clip 프로퍼티
   */
  backgroundClip?: Token<CSS.Property.BackgroundClip | 'text'>;

  /**
   * CSS의 background-color 프로퍼티
   */
  bgColor?: Token<CSS.Property.Color, 'colors'>;

  /**
   * CSS의 background-color 프로퍼티
   */
  backgroundColor?: Token<CSS.Property.Color, 'colors'>;

  /**
   * CSS의 background-image 프로퍼티
   */
  bgImg?: Token<CSS.Property.BackgroundImage>;

  /**
   * CSS의 background-image 프로퍼티
   */
  bgImage?: Token<CSS.Property.BackgroundImage>;

  /**
   * CSS의 background-image 프로퍼티
   */
  backgroundImage?: Token<CSS.Property.BackgroundImage>;

  /**
   * background-gradient 약칭
   */
  bgGradient?: Token<CSS.Property.BackgroundImage>;

  /**
   * CSS의 background-size 프로퍼티
   */
  bgSize?: Token<CSS.Property.BackgroundSize | number>;

  /**
   * CSS의 background-size 프로퍼티
   */
  backgroundSize?: Token<CSS.Property.BackgroundSize | number>;

  /**
   * CSS의 background-position 프로퍼티
   */
  bgPos?: Token<CSS.Property.BackgroundPosition | number>;

  /**
   * CSS의 background-position 프로퍼티
   */
  backgroundPosition?: Token<CSS.Property.BackgroundPosition | number>;

  /**
   * CSS의 background-repeat 프로퍼티
   */
  bgRepeat?: Token<CSS.Property.BackgroundRepeat>;

  /**
   * CSS의 background-repeat 프로퍼티
   */
  backgroundRepeat?: Token<CSS.Property.BackgroundRepeat>;

  /**
   * CSS의 background-attachment 프로퍼티
   */
  bgAttachment?: Token<CSS.Property.BackgroundAttachment>;

  /**
   * CSS의 background-attachment 프로퍼티
   */
  backgroundAttachment?: Token<CSS.Property.BackgroundAttachment>;
}
