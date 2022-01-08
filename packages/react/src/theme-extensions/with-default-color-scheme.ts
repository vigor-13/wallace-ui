import { ThemingProps } from '@wallace-ui/system';
import { Dict, isObject, fromEntries } from '@wallace-ui/utils';
import { ThemeExtension, mergeThemeOverride } from '../extend-theme';

interface WithDefaultColorSchemeProps {
  colorScheme: ThemingProps['colorScheme'];
  components?: string[] | Dict;
}
export function withDefaultColorScheme(
  props: WithDefaultColorSchemeProps
): ThemeExtension {
  const { colorScheme, components } = props;

  return (theme) => {
    let names = Object.keys(theme.components || {});

    if (Array.isArray(components)) {
      names = components;
    } else if (isObject(components)) {
      names = Object.keys(components);
    }

    return mergeThemeOverride(theme, {
      components: fromEntries(
        names.map((componentName) => {
          const withColorScheme = {
            defaultProps: {
              colorScheme,
            },
          };

          return [componentName, withColorScheme];
        })
      ),
    });
  };
}
