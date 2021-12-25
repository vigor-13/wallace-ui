import * as React from 'react';
import { render } from '@wallace-ui/test-utils';
import { Button } from '../src';

test('Should be rendered text', () => {
  const { getByText } = render(<Button>Button</Button>);
  const button = getByText('Button');
  expect(button);
});
