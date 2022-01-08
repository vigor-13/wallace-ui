import * as React from 'react';
import { StoryContext } from '@storybook/react';
import { WallaceProvider, extendTheme } from '@wallace-ui/react';

/**
 * @see [Storybook document](https://storybook.js.org/docs/react/essentials/toolbars-and-globals#create-a-decorator)
 */
const withWallace = (Story: Function, context: StoryContext) => {
  const customTheme = {
    brand: {
      red: '#BE3A34',
      blue: '#041E42',
      yellow: '#FFA300',
    },
  };

  return (
    <WallaceProvider theme={extendTheme(customTheme)}>
      <Story />
    </WallaceProvider>
  );
};

export const decorators = [withWallace];
