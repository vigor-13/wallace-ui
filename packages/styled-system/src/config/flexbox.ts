import * as CSS from 'csstype';
import { Token, Length } from '../utils';

export const flexbox = {};

export interface FlexboxProps {
  /**************************
   * ### CSS `flex` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex)
   */
  flex?: Token<CSS.Property.Flex<Length>>;
  /**
   * ### CSS `flex-wrap` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-wrap)
   */
  flexWrap?: Token<CSS.Property.FlexWrap>;
  /**
   * ### CSS `flex-flow` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-flow)
   */
  flexFlow?: Token<CSS.Property.FlexFlow>;
  /**
   * ### CSS `flex-basis` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-basis)
   */
  flexBasis?: Token<CSS.Property.FlexBasis<Length>>;
  /**
   * ### CSS `flex-direction` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-direction)
   */
  flexDirection?: Token<CSS.Property.FlexDirection>;
  /**
   * ### CSS `flex-direction` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-direction)
   */
  flexDir?: Token<CSS.Property.FlexDirection>;
  /**
   * ### CSS `flex-grow` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-grow)
   */
  flexGrow?: Token<CSS.Property.FlexGrow | (string & number)>;
  /**
   * ### CSS `flex-shrink` property.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-shrink)
   */
  flexShrink?: Token<CSS.Property.FlexShrink | (string & number)>;

  /*********************************
   * ### CSS `align-items` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/align-items)
   */
  alignItems?: Token<CSS.Property.AlignItems>;
  /**
   * ### CSS `align-content` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/align-content)
   */
  alignContent?: Token<CSS.Property.AlignContent>;

  /************************************
   * ### CSS `justify-items` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/justify-items)
   */
  justifyItems?: Token<CSS.Property.JustifyItems>;
  /**
   * ### CSS `justify-content` proeprty
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/justify-content)
   */
  justifyContent?: Token<CSS.Property.JustifyContent>;

  /*************************************
   * ### CSS `justify-self` property.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-flow)
   */
  justifySelf?: Token<CSS.Property.JustifySelf>;
  /**
   * ### CSS `align-self` property.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/align-self)
   */
  alignSelf?: Token<CSS.Property.AlignSelf>;

  /*************************************
   * ### CSS `place-items` property.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/place-items)
   */
  placeItems?: Token<CSS.Property.PlaceItems>;
  /**
   * ### CSS `place-content` property.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/place-content)
   */
  placeContent?: Token<CSS.Property.PlaceContent>;
  /**
   * ### CSS `place-self` property.
   *
   * It allows you to align an individual item in both the block and
   * inline directions at once (i.e. the align-self and justify-self properties)
   * in a relevant layout system such as Grid or Flexbox.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/place-self)
   */
  placeSelf?: Token<CSS.Property.PlaceSelf>;

  /*************************************
   * ### CSS `gap` property.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/gap)
   */
  gap?: Token<CSS.Property.Gap<Length>, 'space'>;
  /**
   * ### CSS `row-gap` property.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/row-gap)
   */
  rowGap?: Token<CSS.Property.RowGap<Length>, 'space'>;
  /**
   * ### CSS `column-gap` property.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/column-gap)
   */
  columnGap?: Token<CSS.Property.ColumnGap<Length>, 'space'>;

  /**************************************
   * ### CSS `order` property.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/order)
   */
  order?: Token<CSS.Property.Order>;

  /************************************************
   * Controls the horizontal space between elements
   */
  experimental_spaceX?: Token<CSS.Property.Margin | number, 'space'>;
  /**
   * Controls the vertical space between elements
   */
  experimental_spaceY?: Token<CSS.Property.Margin | number, 'space'>;
}
