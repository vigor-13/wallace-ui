import React from 'react';
import { Box } from '../src';

export default {
  title: 'Components / Layout / Box',
};

export const basic = () => {
  return (
    <Box
      padding='2rem'
      bg='coral'
      display='inline-block'
      _hover={{ bg: 'purple.500' }}
    >
      <Box
        as='a'
        href='https://www.google.com'
        padding='1rem'
        bg='skyblue'
        display='inline-block'
      >
        Box as 'a' tag
      </Box>
    </Box>
  );
};
