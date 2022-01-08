import { isWallaceTheme } from '@wallace-ui/theme/src/utils';
import { Dict, pipe, mergeWith, isFunction } from '@wallace-ui/utils';
import { theme } from '@wallace-ui/theme';

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
  return mergeWith({}, ...overrides);
}

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
