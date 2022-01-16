import * as CSS from 'csstype';
import { Token, Length, transforms, t } from '../utils';
import { Config } from '../utils/prop-config';

export const filter: Config = {
  filter: { transform: transforms.filter },
  blur: t.blur('--wallace-blur'),
  brightness: t.propT('--wallace-brightness', transforms.brightness),
  contrast: t.propT('--wallace-contrast', transforms.contrast),
  hueRotate: t.degreeT('--wallace-hue-rotate'),
  invert: t.propT('--wallace-invert', transforms.invert),
  saturate: t.propT('--wallace-saturate', transforms.saturate),
  dropShadow: t.propT('--wallace-drop-shadow', transforms.dropShadow),
  backdropFilter: { transform: transforms.backdropFilter },
  backdropBlur: t.blur('--wallace-backdrop-blur'),
  backdropBrightness: t.propT(
    '--wallace-backdrop-brightness',
    transforms.brightness
  ),
  backdropContrast: t.propT('--wallace-backdrop-contrast', transforms.contrast),
  backdropHueRotate: t.degreeT('--wallace-backdrop-hue-rotate'),
  backdropInvert: t.propT('--wallace-backdrop-invert', transforms.invert),
  backdropSaturate: t.propT('--wallace-backdrop-saturate', transforms.saturate),
};

export interface FilterProps {
  /**
   * CSS `filter` property.
   * When set to `auto`, you allow Wallace UI to define
   * the color based on the filter style props
   * (`blur`, `saturate`, etc...)
   */
  filter?: Token<CSS.Property.Filter | 'auto'>;
  /**
   * Sets the blur filter value of an element.
   * Value is assigned to `--wallace-filter` css variable
   */
  blur?: Token<{}, 'blur'>;
  /**
   * Sets the brightness filter value of an element.
   * Value is assigned to `--wallace-brightness` css variable
   */
  brightness?: Token<Length>;
  /**
   * Sets the contrast filter value of an element.
   * Value is assigned to `--wallace-contrast` css variable
   */
  contrast?: Token<Length>;
  /**
   * Sets the hue-rotate filter value of an element.
   * Value is assigned to `--wallace-hue-rotate` css variable
   */
  hueRotate?: Token<Length>;
  /**
   * Sets the invent filter value of an element.
   * Value is assigned to `--wallace-invert` css variable
   */
  invert?: Token<Length>;
  /**
   * Sets the saturate filter value of an element.
   * Value is assigned to `--wallace-saturate` css variable
   */
  saturate?: Token<Length>;
  /**
   * Sets the drop-shadow filter value of an element.
   * Value is assigned to `--wallace-drop-shadow` css variable
   */
  dropShadow?: Token<CSS.Property.BoxShadow, 'shadows'>;

  /**
   * CSS `backdrop-filter` property.
   * When set to `auto`, you allow Wallace UI to define
   * the color based on the backdrop filter style props
   * (`backdropBlur`, `backdropSaturate`, etc...)
   */
  backdropFilter?: Token<CSS.Property.BackdropFilter | 'auto'>;
  /**
   * Sets the backdrop-blur filter value of an element.
   * Value is assigned to `--wallace-backdrop-blur` css variable
   */
  backdropBlur?: Token<{}, 'blur'>;
  /**
   * Sets the backdrop-brightness filter value of an element.
   * Value is assigned to `--wallace-backdrop-brightness` css variable
   */
  backdropBrightness?: Token<Length>;
  /**
   * Sets the backdrop-contrast filter value of an element.
   * Value is assigned to `--wallace-backdrop-contrast` css variable
   */
  backdropContrast?: Token<Length>;
  /**
   * Sets the backdrop-hue-rotate filter value of an element.
   * Value is assigned to `--wallace-backdrop-hue-rotate` css variable
   */
  backdropHueRotate?: Token<Length>;
  /**
   * Sets the backdrop-invert filter value of an element.
   * Value is assigned to `--wallace-backdrop-invert` css variable
   */
  backdropInvert?: Token<Length>;
  /**
   * Sets the backdrop-saturate filter value of an element.
   * Value is assigned to `--wallace-backdrop-saturate` css variable
   */
  backdropSaturate?: Token<Length>;
}
