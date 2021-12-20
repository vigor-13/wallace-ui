import { mergeWith, objectKeys } from '@wallace-ui/utils';
import {
  background,
  border,
  color,
  effect,
  filter,
  flexbox,
  grid,
  interactivity,
  layout,
  list,
  others,
  position,
  ring,
  space,
  textDecoration,
  transform,
  transition,
  typography,
} from './config';
import { pseudoPropNames, pseudoSelectors } from './pseudos';

/**
 * ???
 */
export const systemPorps = mergeWith(
  {},
  background,
  border,
  color,
  flexbox,
  layout,
  filter,
  ring,
  interactivity,
  grid,
  others,
  position,
  effect,
  space,
  typography,
  textDecoration,
  transform,
  list,
  transition
);

/**
 * ???
 */
export const propNames = [...objectKeys(systemPorps), ...pseudoPropNames];

/**
 * ???
 */
const styleProps = { ...systemPorps, ...pseudoSelectors };

/**
 * [Function] isStyleProp
 *
 * @param prop
 * @returns
 */
export const isStyleProp = (prop: string) => prop in styleProps;
