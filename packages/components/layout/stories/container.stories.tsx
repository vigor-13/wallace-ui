import React from 'react';
import { Container } from '../src';

export default {
  title: 'Components / Layout / Container',
};

export const basic = () => {
  return (
    <Container maxWidth='md'>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque velit
        iure illum ipsa quasi sit deserunt nostrum? Blanditiis, vitae accusantium
        harum rem dolore tempore pariatur, facere eos distinctio repudiandae
        exercitationem.
      </p>
    </Container>
  );
};
