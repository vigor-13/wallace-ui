import * as React from 'react';
import { ThemeContext } from '@emotion/react';
import { Dict } from '@wallace-ui/utils';
import { WithCSSVar } from '@wallace-ui/styled-system/src/utils';

// ???
export function useTheme<T extends object = Dict>() {
  const theme = React.useContext(
    ThemeContext as unknown as React.Context<T | undefined>
  );

  if (!theme) {
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<WallaceProvider />` or `<ThemeProvider />`'
    );
  }

  return theme as WithCSSVar<T>;
}
