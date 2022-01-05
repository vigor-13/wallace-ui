import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

export const themeInterfaceDestination = [
  'node_modules',
  '@wallace-ui',
  'styled-system',
  'dist',
  'declaration',
  'src',
  'theming.types.d.ts',
];
