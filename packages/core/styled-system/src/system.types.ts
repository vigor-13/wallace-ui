import { Dict } from '@wallace-ui/utils';
import * as CSS from 'csstype';
import { Pseudos } from './pseudos';
import { ResponsiveValue } from '.';
import type {
  BackgroundProps,
  BorderProps,
  ColorProps,
  EffectProps,
  FilterProps,
  FlexboxProps,
  GridProps,
  InteractivityProps,
  LayoutProps,
  ListProps,
  OthersProps,
  PositionProps,
  RingProps,
  SpaceProps,
  TextDecorationProps,
  TransformProps,
  TransitionProps,
  TypographyProps,
} from './config';

/**
 * 공통 스타일 프로퍼티 정의
 */
export interface StyleProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    EffectProps,
    FilterProps,
    FlexboxProps,
    GridProps,
    InteractivityProps,
    LayoutProps,
    ListProps,
    OthersProps,
    PositionProps,
    RingProps,
    SpaceProps,
    TextDecorationProps,
    TransformProps,
    TransitionProps,
    TypographyProps {}

/**
 * ### [Type] CSSObject
 *
 * wallace-ui CSS 객체 타입이다.
 */
export type CSSObject = RecursiveCSSObject<CSSWithMultiValues>;

/**
 * ### [Type] SystemStyleObject
 *
 * 컴포넌트에 프로퍼티로 전달할 스타일 객체를 정의한 타입이다.
 *
 * 스타일 객체 중에서도 wallace 시스템에 의해서 처리될 프로퍼티에 사용된다.
 *
 * `css`, `__css`, `sx`, `theme` 등이 스타일 프로퍼티이다.
 *
 * `css`는 emotion에서 처리할 스타일 객체라면
 *
 * `__css` wallace 시스템 내부에서 처리할 스타일 객체이다.
 */
export type SystemStyleObject = CSSObject;

/**
 * ???
 */
type PseudoProps = {
  [K in keyof Pseudos]?: SystemStyleObject;
};

/**
 * ???
 */
type PseudoKeys = keyof CSS.Pseudos | keyof Pseudos;
/**
 * ???
 */
type PseudoSelectorDefinition<D> = D | RecursivePseudo<D>;
/**
 * ???
 */
export type RecursivePseudo<D> = {
  [K in PseudoKeys]?: PseudoSelectorDefinition<D> & D;
};

/**
 * ### [Type] RecursiveCSSObject
 */
export type RecursiveCSSObject<D> = D &
  (D | RecursivePseudo<D> | RecursiveCSSSelector<D>);

/**
 * ### [Interface] SystemCSSProperties
 */
export interface SystemCSSProperties
  extends CSS.Properties,
    Omit<StyleProps, keyof CSS.Properties> {}

/**
 * ### [Type] ThemeThunk
 */
export type ThemeThunk<T> = T | ((theme: Dict) => T);

/**
 * ### [Type] PropertyValue
 */
type PropertyValue<K extends keyof SystemCSSProperties> = ThemeThunk<
  ResponsiveValue<boolean | number | string | SystemCSSProperties[K]>
>;

/**
 * ### [Type] CSSWithMultiValues
 */
export type CSSWithMultiValues = {
  [K in keyof SystemCSSProperties]?: K extends keyof StyleProps
    ? StyleProps[K] | PropertyValue<K>
    : PropertyValue<K>;
};

/**
 * ???
 */
type CSSDefinition<D> = D | string | RecursiveCSSSelector<D | string>;

/**
 * ???
 */
export interface RecursiveCSSSelector<D> {
  [selector: string]: CSSDefinition<D> & D;
}

// ???
export interface FunctionCSSInterpolation {
  (theme: Dict): CSSObject;
}

// ???
export type StyleObjectOrFn = CSSObject | FunctionCSSInterpolation;

// ???
export interface SystemProps extends StyleProps, PseudoProps {}
