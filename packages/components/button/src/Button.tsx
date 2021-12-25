import React from 'react';
import { __DEV__ } from '@wallace-ui/utils';
import {
  forwardRef,
  wallace,
  HTMLWallaceProps,
  ThemingProps,
} from '@wallace-ui/system';

export interface ButtonOptions {
  /**
   * HTML button 타입 옵션
   */
  type?: 'button' | 'reset' | 'submit';

  /**
   * 버튼 비활성화 옵션 (true면 비활성화)
   */
  isDisabled?: boolean;
}
export interface ButtonProps
  extends HTMLWallaceProps<'button'>,
    ButtonOptions,
    ThemingProps<'Button'> {}

export const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const { children } = props;

  return <wallace.button>{children}</wallace.button>;
});

if (__DEV__) {
  Button.displayName = 'Button';
}
