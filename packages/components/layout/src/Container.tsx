import * as React from 'react';
import {
  wallace,
  useStyleConfig,
  HTMLWallaceProps,
  ThemingProps,
  forwardRef,
  omitThemingProps,
} from '@wallace-ui/system';
import { __DEV__ } from '@wallace-ui/utils';

export interface ContainerProps
  extends HTMLWallaceProps<'div'>,
    ThemingProps<'Container'> {
  centerContent?: boolean;
  // *TODO: `fixed` 프로퍼티 구현 (참조: https://mui.com/components/container/#fixed)
}

export const Container = forwardRef<ContainerProps, 'div'>((props, ref) => {
  const { className, centerContent, ...rest } = omitThemingProps(props);
  const styles = useStyleConfig('Container', props);

  return (
    <wallace.div
      className='wallace-container'
      ref={ref}
      __css={{
        ...styles,
        ...(centerContent && {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }),
      }}
      {...rest}
    />
  );
});

if (__DEV__) {
  Container.displayName = 'Container';
}
