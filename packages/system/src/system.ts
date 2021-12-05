import { As, WallaceComponent } from './system.types';
import { DOMElement, domElements } from './system.utils';
import _styled, { CSSObject } from '@emotion/styled';
import { SystemStyleObject } from '@wallace-ui/styled-system';
import { shouldForwardProp } from './should-forward-prop';
import React from 'react';

/**
 * ???
 */
type StyleResolverProps = SystemStyleObject & {
  __css?: SystemStyleObject;
  sx?: SystemStyleObject;
  theme: any;
  css?: CSSObject;
};

/**
 * ???
 */
interface StyledOptions {
  shouldForwardProp?(props: string): boolean;
  label?: string;
  baseStyle?: SystemStyleObject | ((props: StyleResolverProps) => SystemStyleObject);
}

/**
 * styled 컴포넌트 생성 함수
 * @param component
 * @param options
 */
export function styled<T extends As, P = {}>(component: T, options?: StyledOptions) {
  const { baseStyle, ...styledOptions } = options ?? {};

  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp;
  }

  // TODO: toCSSObject 함수 구현 필요.
  const styleObject = {};

  return _styled(
    component as React.ComponentType<any>,
    styledOptions
  )(styleObject) as WallaceComponent<T, P>;
}

/**
 * ???
 */
export type HTMLWallaceComponents = {
  [Tag in DOMElement]: WallaceComponent<Tag, {}>;
};

/**
 * styled 컴포넌트 생성 함수 타입 정의
 */
// prettier-ignore
type WallaceFactory = {
  <T extends As, P = {}>(component: T, option?: StyledOptions): WallaceComponent<T, P>
};

/**
 * wallace-ui 전용 HTML 생성자 함수 & 빌트인 HTML 컴포넌트
 * ex-1) <wallace.div></wallace.div>
 * ex-2) wallace('div', { shouldForwardProp: (prop) => !['sample'].includes(prop)});
 */
export const wallace = styled as unknown as WallaceFactory & HTMLWallaceComponents;

domElements.forEach((tag) => {
  wallace[tag] = wallace(tag);
});
