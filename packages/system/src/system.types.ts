import React from 'react';
import { Interpolation } from '@emotion/react';
import {
  StyleProps,
  ResponsiveValue,
  SystemStyleObject,
} from '@wallace-ui/styled-system';

/**
 * wallace-ui 컴포넌트에서 사용할 공통 프로퍼티 정의
 */
export interface WallaceProps extends StyleProps {
  /**
   * true 값일 경우 (뷰포트나 maxWidth 값을 초과하면) ellipsis를 적용하여 렌더링한다.
   */
  isTruncated?: boolean;

  /**
   * Used to truncate text at a specific number of lines
   */
  noOfLines?: ResponsiveValue<number>;

  /**
   * 내부 css 관리에 사용된다.
   * @private
   */
  __css?: any;

  /**
   * Used to pass theme-aware style props.
   * NB: This is the public API for user-land
   */
  sx?: SystemStyleObject;

  /**
   * emotion 스타일 객체
   */
  css?: Interpolation<{}>;
}

/**
 * 테마 관련 프로퍼티 정의
 */
export interface ThemingProps<ThemeComponent extends string = string> {}

/**
 * 리액트 컴포넌트를 받거나 리턴하는 함수를 표현한다.
 * React.ElementType (React.ComponentType + string):
 * This is the type you want to use for functions that receive or
 * return React components such as higher-order components or other
 * utilities.
 */
export type As<Props = any> = React.ElementType<Props>;

/**
 * 대상 컴포넌트에서 ref 속성을 제외한 나머지 속성 추출
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

/**
 * ???
 */
export type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never
> = Omit<Target, 'transition' | 'as' | 'color' | OmitAdditionalProps>;

/**
 * ???
 */
export type RightJoinProps<
  SourceProps extends object = {},
  OverrideProps extends object = {}
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

/**
 * 컴포넌트 프로퍼티 +
 * 베이스 엘리먼트의 jsx attribute +
 * as로 변환한 엘리먼트의 jsx attribute
 */
export type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AddtionalProps extends object = {},
  AsComponent extends As = As
> = RightJoinProps<ComponentProps, AddtionalProps> &
  RightJoinProps<AsProps, AddtionalProps> & { as?: AsComponent };

/**
 * ???
 */
export type ComponentWithAs<Component extends As, Props extends object = {}> = {
  <AsComponent extends As>( // as 프로퍼티를 사용할 경우 해당 엘리먼트의 jsx attribute를 가져오기 위해서 제네릭으로 구분한다.
    props: MergeWithAs<
      React.ComponentProps<Component>,
      React.ComponentProps<AsComponent>,
      Props,
      AsComponent
    >
  ): JSX.Element;
  displayName?: string;
  propTypes?: React.WeakValidationMap<any>;
  contextTypes?: React.ValidationMap<any>;
  defaultProps?: Partial<any>;
  id?: string;
};

/**
 * wallace-ui 전용 컴포넌트 정의
 * 컴포넌트와 프로퍼티를 받고 차크라 프로퍼티와 함께 머지해줌
 */
export interface WallaceComponent<T extends As, P = {}>
  extends ComponentWithAs<T, WallaceProps & P> {}
