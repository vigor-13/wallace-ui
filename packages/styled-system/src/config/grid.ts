import * as CSS from 'csstype';
import { Token, Length } from '../utils';

export const grid = {};

export interface GridProps {
  /********************************
   * ### CSS `grid-column` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)
   */
  gridColumn?: Token<CSS.Property.GridColumn>;
  /**
   * ### CSS `grid-row` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
   */
  gridRow?: Token<CSS.Property.GridRow>;

  /*****************************
   * ### CSS `grid-gap` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap)
   */
  gridGap?: Token<CSS.Property.GridGap | number, 'space'>;
  /**
   * ### CSS `grid-column-gap` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
   */
  gridColumnGap?: Token<CSS.Property.GridColumnGap | number, 'space'>;
  /**
   * ### CSS `grid-row-gap` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)
   */
  gridRowGap?: Token<CSS.Property.GridRowGap | number, 'space'>;

  /***********************************
   * ### CSS `grid-row-start` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start)
   */
  gridRowStart?: Token<CSS.Property.GridRowStart>;
  /**
   * ### CSS `grid-column` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start)
   */
  gridColumnStart?: Token<CSS.Property.GridColumnStart>;
  /**
   * ### CSS `grid-row-end` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end)
   */
  gridRowEnd?: Token<CSS.Property.GridRowEnd>;
  /**
   * ### CSS `grid-column` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end)
   */
  gridColumnEnd?: Token<CSS.Property.GridColumnEnd>;

  /***********************************
   * ### CSS `grid-auto-flow` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
   */
  gridAutoFlow?: Token<CSS.Property.GridAutoFlow>;
  /**
   * ### CSS `grid-auto-columns` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)
   */
  gridAutoColumns?: Token<CSS.Property.GridAutoColumns>;
  /**
   * ### CSS `grid-auto-rows` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
   */
  gridAutoRows?: Token<CSS.Property.GridAutoRows>;

  /**********************************
   * ### CSS `grid-template` property
   * It is a shorthand property for defining grid columns, rows, and areas.
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template)
   */
  gridTemplate?: Token<CSS.Property.GridTemplate>;
  /**
   * ### CSS `grid-template-columns` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
   */
  gridTemplateColumns?: Token<CSS.Property.GridTemplateColumns>;
  /**
   * ### CSS `grid-template-rows` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)
   */
  gridTemplateRows?: Token<CSS.Property.GridTemplateRows>;
  /**
   * ### CSS `grid-template-areas` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
   */
  gridTemplateAreas?: Token<CSS.Property.GridTemplateAreas>;
  /**
   * ### CSS `grid-areas` property
   *
   * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)
   */
  gridArea?: Token<CSS.Property.GridArea>;
}
