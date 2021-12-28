/**
 * The CSS transform order following the upcoming spec from CSSWG
 * translate => rotate => scale => skew
 * @see https://drafts.csswg.org/css-transforms-2/#ctm
 * @see https://www.stefanjudis.com/blog/order-in-css-transformation-transform-functions-vs-individual-transforms/
 */
const transformTemplate = [
  'rotate(var(--wallace-rotate, 0))',
  'scaleX(var(--wallace-scale-x, 1))',
  'scaleY(var(--wallace-scale-y, 1))',
  'skewX(var(--wallace-skew-x, 0))',
  'skewY(var(--wallace-skew-y, 0))',
];

export const filterTemplate = {
  '--wallace-blur': 'var(--wallace-empty,/*!*/ /*!*/)',
  '--wallace-brightness': 'var(--wallace-empty,/*!*/ /*!*/)',
  '--wallace-contrast': 'var(--wallace-empty,/*!*/ /*!*/)',
  '--wallace-grayscale': 'var(--wallace-empty,/*!*/ /*!*/)',
  '--wallace-hue-rotate': 'var(--wallace-empty,/*!*/ /*!*/)',
  '--wallace-invert': 'var(--wallace-empty,/*!*/ /*!*/)',
  '--wallace-saturate': 'var(--wallace-empty,/*!*/ /*!*/)',
  '--wallace-sepia': 'var(--wallace-empty,/*!*/ /*!*/)',
  '--wallace-drop-shadow': 'var(--wallace-empty,/*!*/ /*!*/)',
  'filter': [
    'var(--wallace-blur)',
    'var(--wallace-brightness)',
    'var(--wallace-contrast)',
    'var(--wallace-grayscale)',
    'var(--wallace-hue-rotate)',
    'var(--wallace-invert)',
    'var(--wallace-saturate)',
    'var(--wallace-sepia)',
    'var(--wallace-drop-shadow)',
  ].join(' '),
};

export const backdropFilterTemplate = {
  'backdropFilter': [
    'var(--wallace-backdrop-blur)',
    'var(--wallace-backdrop-brightness)',
    'var(--wallace-backdrop-contrast)',
    'var(--wallace-backdrop-grayscale)',
    'var(--wallace-backdrop-hue-rotate)',
    'var(--wallace-backdrop-invert)',
    'var(--wallace-backdrop-opacity)',
    'var(--wallace-backdrop-saturate)',
    'var(--wallace-backdrop-sepia)',
  ].join(' '),
  '--wallace-backdrop-blur': 'var(--wallace-empty,/*!*/ /*!*/)',
  '--wallace-backdrop-brightness': 'var(--wallace-empty,/*!*/ /*!*/)',
  '--wallace-backdrop-contrast': 'var(--wallace-empty,/*!*/ /*!*/)',
  '--wallace-backdrop-grayscale': 'var(--wallace-empty,/*!*/ /*!*/)',
  '--wallace-backdrop-hue-rotate': 'var(--wallace-empty,/*!*/ /*!*/)',
  '--wallace-backdrop-invert': 'var(--wallace-empty,/*!*/ /*!*/)',
  '--wallace-backdrop-opacity': 'var(--wallace-empty,/*!*/ /*!*/)',
  '--wallace-backdrop-saturate': 'var(--wallace-empty,/*!*/ /*!*/)',
  '--wallace-backdrop-sepia': 'var(--wallace-empty,/*!*/ /*!*/)',
};

export function getTransformTemplate() {
  return [
    'translateX(var(--wallace-translate-x, 0))',
    'translateY(var(--wallace-translate-y, 0))',
    ...transformTemplate,
  ].join(' ');
}

export function getTransformGpuTemplate() {
  return [
    'translate3d(var(--wallace-translate-x, 0), var(--wallace-translate-y, 0), 0)',
    ...transformTemplate,
  ].join(' ');
}

export function getRingTemplate(value: any) {
  return {
    '--wallace-ring-offset-shadow': `var(--wallace-ring-inset) 0 0 0 var(--wallace-ring-offset-width) var(--wallace-ring-offset-color)`,
    '--wallace-ring-shadow': `var(--wallace-ring-inset) 0 0 0 calc(var(--wallace-ring-width) + var(--wallace-ring-offset-width)) var(--wallace-ring-color)`,
    '--wallace-ring-width': value,
    'boxShadow': [
      `var(--wallace-ring-offset-shadow)`,
      `var(--wallace-ring-shadow)`,
      `var(--wallace-shadow, 0 0 #0000)`,
    ].join(', '),
  };
}
