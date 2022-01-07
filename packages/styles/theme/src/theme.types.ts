import type { ThemingProps } from '@wallace-ui/system';
import type { StyleObjectOrFn } from '@wallace-ui/styled-system';
import {
  SystemStyleInterpolation,
  PartsStyleInterpolation,
  Styles,
} from '@wallace-ui/theme-tools';
import { Dict } from '@wallace-ui/utils';

export type RecursiveProperty<T = string | number> = RecursiveObject<T> | T;

export interface RecursiveObject<T = string | number> {
  [property: string]: RecursiveProperty<T>;
}

export type ThemeDirection = 'ltr' | 'rtl';

export interface ColorHues {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export type Colors = RecursiveObject<Record<string, Partial<ColorHues> | string>>;

export interface ThemeConfig {
  // *TODO: extends ColorModeOptions 미구현...
  cssVarPrefix?: string;
}

export interface ComponentDefaultProps
  extends Omit<ThemingProps, 'styleConfig'>,
    Dict {}

export interface ComponentSingleStyleConfig {
  parts?: never;
  baseStyle?: SystemStyleInterpolation;
  sizes?: Record<string, SystemStyleInterpolation>;
  variants?: Record<string, SystemStyleInterpolation>;
  defaultProps?: ComponentDefaultProps;
}
export interface ComponentMultiStyleConfig {
  parts: string[];
  baseStyle?: PartsStyleInterpolation;
  sizes?: Record<string, PartsStyleInterpolation>;
  variants?: Record<string, PartsStyleInterpolation>;
  defaultProps?: ComponentDefaultProps;
}

export type ComponentStyleConfig =
  | ComponentSingleStyleConfig
  | ComponentMultiStyleConfig;

export interface SystemStyleObjectRecord {
  [key: string]: StyleObjectOrFn;
}

export type ThemeTransitions = RecursiveObject & {
  property: RecursiveObject;
  easing: RecursiveObject;
  duration: RecursiveObject;
};

export interface ThemeComponents {
  [componentName: string]: ComponentStyleConfig;
}

interface Typography {
  fonts: RecursiveObject<string>;
  fontSizes: RecursiveObject;
  fontWeights: RecursiveObject;
  letterSpacings: RecursiveObject;
  lineHeights: RecursiveObject;
}

interface Foundations extends Typography {
  // *TODO: breakpoints 미구현...
  borders: RecursiveObject;
  colors: Colors;
  radii: RecursiveObject;
  shadows: RecursiveObject<string>;
  sizes: RecursiveObject;
  space: RecursiveObject;
  transition: ThemeTransitions;
  zIndices: RecursiveObject;
}

export interface WallaceTheme extends Foundations {
  components: ThemeComponents;
  config: ThemeConfig;
  direction: ThemeDirection;
  styles: Styles;
  layerStyles?: SystemStyleObjectRecord;
  textStyles?: SystemStyleObjectRecord;
}
