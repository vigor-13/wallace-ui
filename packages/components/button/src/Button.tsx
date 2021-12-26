import React from 'react';
import { __DEV__ } from '@wallace-ui/utils';
import {
  forwardRef,
  wallace,
  HTMLWallaceProps,
  ThemingProps,
  useStyleConfig,
  omitThemingProps,
} from '@wallace-ui/system';
import { SystemStyleObject } from '@wallace-ui/styled-system';

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
  const { children, isDisabled, as, ...rest } = omitThemingProps(props);
  const styles = useStyleConfig('Button', { ...props });

  const buttonStyles: SystemStyleObject = React.useMemo(() => {
    return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      appearance: 'none',
      userSelect: 'none',
      position: 'relative',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      outline: 'none',
      ...styles,
    };
  }, [styles]);

  return (
    <wallace.button disabled={isDisabled} as={as} __css={buttonStyles} {...rest}>
      {children}
    </wallace.button>
  );
});

if (__DEV__) {
  Button.displayName = 'Button';
}
