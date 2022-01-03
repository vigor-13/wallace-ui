import { render } from '@wallace-ui/test-utils';
import * as React from 'react';
import { Container } from '..';

describe('<Container />', () => {
  test('render box correctly', () => {
    render(<Container>Basic Container</Container>);
  });

  test('conterContent - prop works correctly', () => {
    render(<Container centerContent>Basic Container</Container>);
  });
});
