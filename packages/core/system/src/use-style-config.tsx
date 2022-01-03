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

/**
 * raw theme 객체에서 필요한 styles 객체를 추출한다.
 */
export function useStyleConfig(themeKey: any, props: any = {}, opts: any = {}) {
  /*
   * 1. styles 객체를 구성하기 이한 config 파일 정리.
   */
  const { styleConfig: StyleConfigProp, ...rest } = props;
  const { theme } = useWallace(); // *TODO: colorMode 구현 필요...
  const themeStyleConfig = get(theme, `components.${themeKey}`);
  const styleConfig = StyleConfigProp || themeStyleConfig;
  const mergedProps = mergeWith(
    { theme },
    styleConfig?.defaultProps ?? {},
    filterUndefined(omit(rest, ['children']))
  );

  /*
   * 2. 불필요한 재연산을 피하기 위해서 computed styles를 ref에 저장한다.
   */
  type StylesRef = SystemStyleObject | Record<string, SystemStyleObject>;
  const stylesRef = useRef<StylesRef>({});

  /*
   * 3. 앞서 구한 config 객체를 사용해서 styles 객체를 만든다.
   */
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
