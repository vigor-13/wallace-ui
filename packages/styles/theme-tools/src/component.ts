import { SystemStyleObject } from '@wallace-ui/system';
import { Dict } from '@wallace-ui/utils';
export type { SystemStyleObject };

/* --------------------------------------------------------------------------
 * Style Configuration definition for components
 ------------------------------------------------------------------------- */

// minimal representation of the anoatomy object
type Anatomy = { __type: string };

/* --------------------------------------------------------------------------
 * Style functions used in the theme

  - Single part components: use SystemStyleObject or SystemStyleFunction
  - Multi part components: use PartsStyleObject or PartStyleFunction
 ------------------------------------------------------------------------- */

export type StyleFunctionProps = {
  colorScheme: string;
  colorMode: 'light' | 'dark';
  orientation?: 'horizontal' | 'vertical';
  theme: Dict;
  [key: string]: any;
};

export type SystemStyleFunction = (props: StyleFunctionProps) => SystemStyleObject;

export type SystemStyleInterpolation = SystemStyleObject | SystemStyleFunction;

export type PartsStyleObject<T extends Anatomy = Anatomy> = Partial<
  Record<T['__type'], SystemStyleObject>
>;

export type PartsStyleFunction<T extends Anatomy = Anatomy> = (
  props: StyleFunctionProps
) => PartsStyleObject<T>;

export type PartsStyleInterpolation<T extends Anatomy = Anatomy> =
  | PartsStyleObject<T>
  | PartsStyleFunction<T>;

/* --------------------------------------------------------------------------
 * Global style object definitions
 ------------------------------------------------------------------------- */

export type GlobalStyles = {
  global?: SystemStyleInterpolation;
};

export type JSXElementStyles = {
  [K in keyof JSX.IntrinsicElements]?: SystemStyleObject;
};

export type Styles = GlobalStyles & JSXElementStyles;

export function mode(light: any, dark: any) {
  return (props: Dict | StyleFunctionProps) =>
    props.colorMode === 'dark' ? dark : light;
}
