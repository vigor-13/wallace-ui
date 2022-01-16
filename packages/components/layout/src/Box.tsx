import { __DEV__ } from '@wallace-ui/utils';
import { HTMLWallaceProps, wallace } from '@wallace-ui/system';

export interface BoxProps extends HTMLWallaceProps<'div'> {}

export const Box = wallace('div');

if (__DEV__) {
  Box.displayName = 'Box';
}
