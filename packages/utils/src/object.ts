import { Dict } from './types';

export { default as mergeWith } from 'lodash.mergewith';

export const objectKeys = <T extends Dict>(obj: T) => {
  return Object.keys(obj) as unknown as (keyof T)[];
};
