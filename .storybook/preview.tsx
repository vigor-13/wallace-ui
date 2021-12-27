import * as React from 'react';
import { StoryContext } from '@storybook/react';

/**
 * @see [Storybook document](https://storybook.js.org/docs/react/essentials/toolbars-and-globals#create-a-decorator)
 */
const withWallace = (Story: Function, context: StoryContext) => {
  return (
    <div>
      <Story />
    </div>
  );
};

export const decorators = [withWallace];