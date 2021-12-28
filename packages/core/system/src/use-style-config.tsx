import { useRef } from 'react';
import isEqual from 'react-fast-compare';
import { SystemStyleObject } from '@wallace-ui/styled-system';
import {
  filterUndefined,
  memoizedGet as get,
  mergeWith,
  omit,
  runIfFn,
} from '@wallace-ui/utils';
import { useWallace } from './hooks';

// ???
export function useStyleConfig(themeKey: any, props: any = {}, opts: any = {}) {
  const { styleConfig: StyleConfigProp, ...rest } = props;

  const { theme } = useWallace(); // TODO: colorMode 구현 필요...
  const themeStyleConfig = get(theme, `components.${themeKey}`);
  const styleConfig = StyleConfigProp || themeStyleConfig;

  const mergedProps = mergeWith(
    { theme },
    styleConfig?.defaultProps ?? {},
    filterUndefined(omit(rest, ['children']))
  );

  /**
   * Store the computed styles in a `ref` to avoid uneeded re-computation.
   */
  type StylesRef = SystemStyleObject | Record<string, SystemStyleObject>;
  const stylesRef = useRef<StylesRef>({});

  if (styleConfig) {
    const baseStyles = runIfFn(styleConfig.baseStyle ?? {}, mergedProps);

    const variants = runIfFn(
      styleConfig.variants?.[mergedProps.variant] ?? {},
      mergedProps
    );

    const sizes = runIfFn(styleConfig.sizes?.[mergedProps.size] ?? {}, mergedProps);

    const styles = mergeWith({}, baseStyles, sizes, variants);

    if (opts?.isMultiPart && styleConfig.parts) {
      styleConfig.parts.forEach((part: string) => {
        styles[part] = styles[part] ?? {};
      });
    }

    const isStyleEqual = isEqual(stylesRef.current, styles);
    if (!isStyleEqual) {
      stylesRef.current = styles;
    }
  }

  return stylesRef.current;
}
