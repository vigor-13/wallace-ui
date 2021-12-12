import { Dict } from '@wallace-ui/utils';
import { ThemeTypings } from '../theming.types';

/**
 * ???
 */
export type Length = string | 0 | number;

/**
 * ???
 */
export type ResponsiveArray<T> = Array<T | null>;

/**
 * ???
 */
export type ResponsiveObject<T> = Partial<
  Record<ThemeTypings['breakpoints'] | string, T>
>;

/**
 * ???
 */
export type ResponsiveValue<T> = T | ResponsiveArray<T> | ResponsiveObject<T>;

/**
 * ???
 */
export type Transform = (value: any, theme: any, styles?: Dict) => any;

/**
 * ???
 */
export type Union<T> = T | (string & {});

/**
 * ???
 */
export type Token<CSSType, ThemeKey = unknown> = ThemeKey extends keyof ThemeTypings
  ? ResponsiveValue<Union<CSSType | ThemeTypings[ThemeKey]>>
  : ResponsiveValue<CSSType>;
