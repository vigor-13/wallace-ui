import { As, WallaceComponent, PropsOf } from './system.types';
import { DOMElement, domElements } from './system.utils';
import _styled, { CSSObject } from '@emotion/styled';
import { SystemStyleObject, StyleProps } from '@wallace-ui/styled-system';
import { shouldForwardProp } from './should-forward-prop';
import React from 'react';
import { WallaceProps } from '.';

/**
 * wallace-ui에서 컴포넌트에서 사용할 최종 공통 프로퍼티 정의
 */
export type HTMLWallaceProps<T extends As> = Omit<
  PropsOf<T>,
  T extends 'svg' ? 'ref' | 'children' | keyof StyleProps : 'ref' | keyof StyleProps
> &
  WallaceProps & { as?: As };

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
 * 커스텀 styled 함수
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
 * 컴포넌트 생성 함수 타입 정의
 */
// prettier-ignore
type WallaceFactory = {
  <T extends As, P = {}>(component: T, option?: StyledOptions): WallaceComponent<T, P>
};
/**
 * wallace HTML 컴포넌트 리스트 정의
 */
export type HTMLWallaceComponents = {
  [Tag in DOMElement]: WallaceComponent<Tag, {}>;
};

/**
 * 최종 컴포넌트 생성자
 */
export const wallace = styled as unknown as WallaceFactory & HTMLWallaceComponents;
domElements.forEach((tag) => {
  wallace[tag] = wallace(tag);
});
