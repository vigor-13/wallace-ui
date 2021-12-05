import { ThemeTypings } from '..';

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
