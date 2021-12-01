import React from 'react';

/**
 * React.ElementType (React.ComponentType + string):
 * \ This is the type you want to use for functions that receive or
 * \ return React components such as higher-order components or other
 * \ utilities.
 */
export type As<Props = any> = React.ElementType<Props>;

export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

export type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never
> = Omit<Target, 'transition' | 'as' | 'color' | OmitAdditionalProps>;

export type RightJoinProps<
  SourceProps extends object = {},
  OverrideProps extends object = {}
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;
