import { Dict, pipe } from '@wallace-ui/utils';
import { ComponentDefaultProps } from '@wallace-ui/theme';
import { mergeThemeOverride } from '../extend-theme';
import { withDefaultColorScheme } from './with-default-color-scheme';
import { withDefaultSize } from './with-default-size';
import { withDefaultVariant } from './with-default-variant';

interface WithDefaultPropsProps {
  defaultProps: ComponentDefaultProps;
  components?: string[] | Dict;
}
export function withDefaultProps(props: WithDefaultPropsProps) {
  const {
    defaultProps: { colorScheme, variant, size },
    components,
  } = props;
  const identity = <T>(t: T) => t;
  const fns = [
    colorScheme ? withDefaultColorScheme({ colorScheme, components }) : identity,
    size ? withDefaultSize({ size, components }) : identity,
    variant ? withDefaultVariant({ variant, components }) : identity,
  ];

  return (theme: Dict) => mergeThemeOverride(pipe(...fns)(theme));
}
