import React from 'react';
import { Button } from '../Button';

export default {
  title: 'Components / Inputs / Button',
  decorators: [(Story: any) => <Story />],
};

export const basic = () => (
  <>
    <Button />
  </>
);
