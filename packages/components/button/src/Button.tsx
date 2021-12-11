import React from 'react';
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
   * true 값이면 버튼 비활성화
   */
  isDisabled?: boolean;
}
export interface ButtonProps
  extends HTMLWallaceProps<'button'>,
    ButtonOptions,
    ThemingProps<'Button'> {}

export const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  return <wallace.button>test</wallace.button>;
});

Button.displayName = 'Button';
