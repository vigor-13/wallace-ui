import { render } from '@wallace-ui/test-utils';
import * as React from 'react';
import { Container, Box } from '..';

describe('<Box />', () => {
  test('render correctly', () => {
    render(<Box>Basic Box</Box>);
  });

  test('as - prop works correctly', () => {
    const { getByText } = render(
      <Box as='a' href='www.google.com'>
        Box
      </Box>
    );

    expect(getByText('Box').nodeName).toBe('A');
  });
});

describe('<Container />', () => {
  test('render correctly', () => {
    render(<Container>Basic Container</Container>);
  });

  test('conterContent - prop works correctly', () => {
    render(<Container centerContent>Basic Container</Container>);
  });
});
