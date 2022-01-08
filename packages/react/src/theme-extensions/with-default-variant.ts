import { ThemingProps } from '@wallace-ui/system';
import { Dict, fromEntries, isObject } from '@wallace-ui/utils';
import { ThemeExtension, mergeThemeOverride } from '../extend-theme';

interface WithDefaultVariantProps {
  variant: ThemingProps['variant'];
  components?: string[] | Dict;
}
export function withDefaultVariant(props: WithDefaultVariantProps): ThemeExtension {
  const { variant, components } = props;

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
          const withVariant = {
            defaultProps: {
              variant,
            },
          };
          return [componentName, withVariant];
        })
      ),
    });
  };
}
