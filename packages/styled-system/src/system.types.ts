import * as CSS from 'csstype';
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
 * ???
 */
type PseudoProps = {};

/**
 * ???
 */
export type SystemStyleObject = {};

/**
 * ???
 */
export interface SystemProps extends StyleProps, PseudoProps {}
