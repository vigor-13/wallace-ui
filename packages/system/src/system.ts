import _styled, { CSSObject, FunctionInterpolation } from '@emotion/styled';
import {
  SystemStyleObject,
  StyleProps,
  isStyleProp,
} from '@wallace-ui/styled-system';
import { Dict, filterUndefined, objectFilter, runIfFn } from '@wallace-ui/utils';
import { As, WallaceComponent, PropsOf } from './system.types';
import { DOMElement, domElements } from './system.utils';
import { shouldForwardProp } from './should-forward-prop';
import React from 'react';
import { WallaceProps } from '.';
import { css } from '@wallace-ui/styled-system/src/css';

/**
 * ### [Type] HTMLWallaceProps
 *
 * wallace 컴포넌트에서 사용할 공용 프로퍼티 타입 모음으로 다음과 같이 구성된다.
 *
 * 1. React.ComponentProps
 * 2. WallaceProps
 * 3. as
 */
export type HTMLWallaceProps<T extends As> = Omit<
  PropsOf<T>,
  T extends 'svg' ? 'ref' | 'children' | keyof StyleProps : 'ref' | keyof StyleProps
> &
  WallaceProps & { as?: As };

/**
 * ???
 */
interface StyledOptions {
  shouldForwardProp?(props: string): boolean;
  label?: string;
  baseStyle?: SystemStyleObject | ((props: StyleResolverProps) => SystemStyleObject);
}

/**
 * ### [Type] StyleResolverProps
 *
 * 컴포넌트에서 옵션으로 받을 수 있는 프로퍼티들 중에서
 *
 * 스타일과 관련된 프로퍼티만 모은 타입이다.
 */
type StyleResolverProps = SystemStyleObject & {
  __css?: SystemStyleObject;
  sx?: SystemStyleObject;
  theme: any;
  css?: CSSObject;
};

/**
 * ### [Interface] GetStyleObject
 *
 * toCSSObject 함수의 인터페이스이다.
 */
interface GetStyleObject {
  (options: {
    baseStyle?:
      | SystemStyleObject
      | ((props: StyleResolverProps) => SystemStyleObject);
  }): FunctionInterpolation<StyleResolverProps>;
}

/**
 * ### [Function] toCSSObject
 * 스타일 관련 프로퍼티들을 어떤 우선순위로 병합해야할지 관리하는 함수이다.
 *
 * (내부적으로 emotion의 styled 함수에 제공하여 컴포넌트의 프로퍼티를 받아 처리하는데 사용된다.)
 *
 * 예를 들면 아래와 같은 경우에 필요한 함수이다.
 *
 * ```jsx
 * <Box fontSize="24px" sx={{ fontSize: "40px" }}></Box>
 * ```
 *
 * 우선순위를 적절히 관리하지 않으면 어떤 스타일이 적용될지 알 수 없게 된다.
 *
 * 현재 정책으로는 sx 프로퍼티가 우선권을 갖고 있으므로 폰트사이즈는 40이다.
 */
export const toCSSObject: GetStyleObject =
  ({ baseStyle }) =>
  (props) => {
    const { theme, css: cssProp, __css, sx, ...rest } = props;
    const styleProps = objectFilter(rest, (_, prop) => isStyleProp(prop));
    const finalBaseStyle = runIfFn(baseStyle, props);
    const finalStyles = Object.assign(
      {},
      __css,
      finalBaseStyle,
      filterUndefined(styleProps),
      sx
    );
    const computedCSS = css(finalStyles)(props.theme);
    return cssProp ? [computedCSS, cssProp] : computedCSS;
  };

/**
 * ### [Function] styled
 *
 * @param component
 * @param options
 */
export function styled<T extends As, P = {}>(component: T, options?: StyledOptions) {
  const { baseStyle, ...styledOptions } = options ?? {};

  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp;
  }

  const styleObject = toCSSObject({ baseStyle });

  return _styled(
    component as React.ComponentType<any>,
    styledOptions
  )(styleObject) as WallaceComponent<T, P>;
}

/**
 * ### [Type] WallaceFactory
 */
// prettier-ignore
type WallaceFactory = {
  <T extends As, P = {}>(component: T, option?: StyledOptions): WallaceComponent<T, P>
};
/**
 * ### [Type] HTMLWallaceComponents
 */
export type HTMLWallaceComponents = {
  [Tag in DOMElement]: WallaceComponent<Tag, {}>;
};

/**
 * ### wallace 컴포넌트
 *
 * 아래와 같이 사용한다.
 *
 * ```jsx
 * var Button = wallace('button'); or
 * <wallace.button>123</wallace.button>
 * ```
 */
export const wallace = styled as unknown as WallaceFactory & HTMLWallaceComponents;
domElements.forEach((tag) => {
  wallace[tag] = wallace(tag);
});
