import React from 'react';
import { forwardRef } from '@wallace-ui/system';

export const Button = forwardRef<{}, 'button'>((props, ref) => {
  return <button>test</button>;
});

Button.displayName = 'Button';
