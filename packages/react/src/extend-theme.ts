import { Dict, pipe, mergeWith, isFunction } from '@wallace-ui/utils';
import { theme, Theme, WallaceTheme, isWallaceTheme } from '@wallace-ui/theme';

type CloneKey<Target, Key> = Key extends keyof Target ? Target[Key] : unknown;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Represents a loose but specific type for the theme override.
 * It provides autocomplete hints for extending the theme, but leaves room
 * for adding properties.
 */
type DeepThemeExtension<BaseTheme, ThemeType> = {
  [Key in keyof BaseTheme]?: BaseTheme[Key] extends (...args: any[]) => any
    ? DeepThemeExtension<
        DeepPartial<ReturnType<BaseTheme[Key]>>,
        CloneKey<ThemeType, Key>
      >
    : BaseTheme[Key] extends Array<any>
    ? CloneKey<ThemeType, Key>
    : BaseTheme[Key] extends object
    ? DeepThemeExtension<DeepPartial<BaseTheme[Key]>, CloneKey<ThemeType, Key>>
    : CloneKey<ThemeType, Key>;
};

export declare type ThemeOverride<BaseTheme = Theme> = DeepPartial<WallaceTheme> &
  DeepThemeExtension<BaseTheme, WallaceTheme> &
  Dict;

export type ThemeExtension<Override extends ThemeOverride = ThemeOverride> = (
  themeOverride: Override
) => Override;

// export type ThemeExtension<Override extends > = () =>

/**
 * NOTE: This got too complex to manage and it's not worth the extra complexity.
 * We'll re-evaluate this API in the future releases.
 *
 * Function to override or customize the Chakra UI theme conveniently.
 * First extension overrides the baseTheme and following extensions override the preceding extensions.
 *
 * @example
 * ```typescript
 * import { theme as baseTheme, extendTheme, withDefaultColorScheme } from '@wallace-ui/react';
 *
 * const customTheme = extendTheme(
 *  {
 *    colors: {
 *      brand: {
 *        500: "#b3d455"
 *      },
 *    },
 *  },
 *  withDefaultColorScheme({ colorScheme: 'red' }),
 *  baseTheme // optional
 * )
 * ```
 */
type extendThemeProps = Array<Dict | ((theme: Dict) => Dict)>;
export function extendTheme(...extensions: extendThemeProps): Dict {
  let overrides = [...extensions];
  let baseTheme = extensions[extensions.length - 1];

  if (isWallaceTheme(baseTheme) && overrides.length > 1) {
    overrides = overrides.slice(0, overrides.length - 1);
  } else {
    baseTheme = theme;
  }

  return pipe(
    ...overrides.map(
      (extension) => (prevTheme: any) =>
        isFunction(extension)
          ? (extension as any)(prevTheme)
          : mergeThemeOverride(prevTheme, extension)
    )
  )(baseTheme);
}

export function mergeThemeOverride(...overrides: any[]): any {
  return mergeWith({}, ...overrides, mergeThemeCustomizer);
}

// ???
function mergeThemeCustomizer(
  source: unknown,
  override: unknown,
  key: string,
  object: any
) {
  if (
    isFunction(source) ||
    (isFunction(override) && Object.prototype.hasOwnProperty.call(object, key))
  ) {
    return (...args: unknown[]) => {
      const sourceValue = isFunction(source) ? source(...args) : source;
      const overrideValue = isFunction(override) ? override(...args) : override;

      return mergeWith({}, sourceValue, overrideValue, mergeThemeCustomizer);
    };
  }

  // fallback to default behavior
  return undefined;
}
