import React from 'react';
import { Container } from '@wallace-ui/layout';
import { Button } from '../src';

export default {
  title: 'Components / Inputs / Button',
  decorators: [
    (Story: any) => (
      <Container mt='40px'>
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => (
  <>
    <Button>Button</Button>
    <Button background='brand.blue' color='white'>
      worriors blue
    </Button>
    <Button background='brand.red' color='white'>
      worriors red
    </Button>
    <Button background='brand.yellow'>worriors yellow</Button>
  </>
);
