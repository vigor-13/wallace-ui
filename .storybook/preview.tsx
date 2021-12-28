import * as React from 'react';
import { StoryContext } from '@storybook/react';
import { WallaceProvider } from '@wallace-ui/react';

/**
 * @see [Storybook document](https://storybook.js.org/docs/react/essentials/toolbars-and-globals#create-a-decorator)
 */
const withWallace = (Story: Function, context: StoryContext) => {
  return (
    <WallaceProvider>
      <Story />
    </WallaceProvider>
  );
};

export const decorators = [withWallace];
