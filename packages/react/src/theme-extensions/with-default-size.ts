import { ThemingProps } from '@wallace-ui/system';
import { Dict, fromEntries, isObject } from '@wallace-ui/utils';
import { ThemeExtension, mergeThemeOverride } from '../extend-theme';

interface WithDefaultSizeProps {
  size: ThemingProps['size'];
  components?: string[] | Dict;
}
export function withDefaultSize(props: WithDefaultSizeProps): ThemeExtension {
  const { size, components } = props;

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
          const withSize = {
            defaultProps: {
              size,
            },
          };
          return [componentName, withSize];
        })
      ),
    });
  };
}
