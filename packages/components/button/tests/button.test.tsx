import * as React from 'react';
import { render } from '@wallace-ui/test-utils';
import { Button } from '../src';

test('Should be disabled', () => {
  const { getByText } = render(<Button isDisabled>Disabled button</Button>);
  const button = getByText('Disabled button');
  expect(button).toBeDisabled();
});

test('Should be rendered text', () => {
  const { getByText } = render(<Button>Button</Button>);
  const button = getByText('Button');
  expect(button);
});
