import * as CSS from 'csstype';
import { Token, Length, transforms, t } from '../utils';
import { Config } from '../utils/prop-config';

export const interactivity: Config = {
  apprearance: true,
  cursor: true,
  resize: true,
  userSelect: true,
  pointerEvents: true,
  outline: { transform: transforms.outline },
  outlineOffset: true,
  outlineColor: t.colors('outlineColor'),
};

export interface InteractivityProps {
  /**
   * ### CSS `appearance` property
   */
  appearance?: Token<CSS.Property.Appearance>;

  /**
   * ### CSS `user-select` property
   */
  userSelect?: Token<CSS.Property.UserSelect>;

  /**
   * ### CSS `pointer-events` property
   */
  pointerEvents?: Token<CSS.Property.PointerEvents>;

  /**
   * ### CSS `resize` property
   */
  resize?: Token<CSS.Property.Resize>;

  /**
   * ### CSS `cursor` property
   */
  cursor?: Token<CSS.Property.Cursor>;

  /*****************************
   * ### CSS `outline` property
   */
  outline?: Token<CSS.Property.Outline<Length>>;
  /**
   * ### CSS `outline-offset` property
   */
  outlineOffset?: Token<CSS.Property.OutlineOffset<Length>>;
  /**
   * ### CSS `outline-color` property
   */
  outlineColor?: Token<CSS.Property.Color, 'colors'>;
}
