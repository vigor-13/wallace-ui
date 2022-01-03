import React from 'react';
import { Container } from '@wallace-ui/layout';
import { Button } from '../src';

export default {
  title: 'Components / Inputs / Button',
  decorators: [
    (Story: any) => (
      <Container mt='40px' centerContent>
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => (
  <>
    <Button>Button</Button>
  </>
);
