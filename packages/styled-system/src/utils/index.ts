import { ThemeScale } from '../create-theme-vars';
import { createTransform } from './create-transform';
import { toConfig, logical, PropConfig } from './prop-config';
import { transformFunctions as transforms } from './transform-functions';
export * from './types';
export { transforms };

// ???
export const t = {
  borderWidths: toConfig('borderWidths'),
  borderStyles: toConfig('borderStyles'),
  colors: toConfig('colors'),
  borders: toConfig('borders'),
  radii: toConfig('radii', transforms.px),
  space: toConfig('space', transforms.px),
  spaceT: toConfig('space', transforms.px),
  sizes: toConfig('sizes', transforms.px),
  sziesT: toConfig('sizes', transforms.fraction),
  shadows: toConfig('shadows'),
  blur: toConfig('blur', transforms.blur),
  logical,
  degreeT(property: PropConfig['property']) {
    return { property, transform: transforms.degree };
  },
  prop(
    property: PropConfig['property'],
    scale?: ThemeScale,
    transform?: PropConfig['transform']
  ) {
    return {
      property,
      scale,
      ...(scale && {
        transform: createTransform({ scale, transform }),
      }),
    };
  },
  propT(property: PropConfig['property'], transform?: PropConfig['transform']) {
    return { property, transform };
  },
};
