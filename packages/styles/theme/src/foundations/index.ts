import colors from './colors';
import radii from './radius';
import sizes from './sizes';
import { spacing } from './spacing';
import shadows from './shadows';
import transition from './transition';
import borders from './borders';
import typography from './typography';
import blur from './blur';
import zIndices from './z-index';

const foundations = {
  blur,
  colors,
  radii,
  sizes,
  space: spacing,
  shadows,
  transition,
  borders,
  ...typography,
  zIndices,
};

type FoundationsType = typeof foundations;

export default foundations;
