import React from 'react';
import { As, PropsOf, RightJoinProps } from './system.types';

/**
 * ???
 * @param component
 * @returns
 */
// prettier-ignore
export function forwardRef<Props extends object, Component extends As>
(component: React.ForwardRefRenderFunction<any, RightJoinProps<PropsOf<Component>, Props> & { as?: As }>) 
{
  return React.forwardRef(component);
}
