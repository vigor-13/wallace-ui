/**
 * List of props for emotion to omit from DOM.
 * It mostly consists of Wallace props
 */
const allPropNames = new Set([
  'textStyle',
  'layerStyle',
  'apply',
  'isTruncated',
  'noOfLines',
  'focusBorderColor',
  'errorBorderColor',
  'as',
  '__css',
  'css',
  'sx',
]);

/**
 * ???
 * htmlWidth and htmlHeight is used in the <Image /> component
 * to support the native 'width' and 'height' attributes
 */
const validHTMLProps = new Set(['htmlWidth', 'htmlHeight', 'htmlSize']);

/**
 * ???
 */
export const shouldForwardProp = (prop: string): boolean =>
  validHTMLProps.has(prop) || !allPropNames.has(prop);
