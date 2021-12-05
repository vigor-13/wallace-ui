import React from 'react';
import { forwardRef, wallace } from '@wallace-ui/system';

export const Button = forwardRef<{}, 'button'>((props, ref) => {
  return <wallace.button>test</wallace.button>;
});

Button.displayName = 'Button';
