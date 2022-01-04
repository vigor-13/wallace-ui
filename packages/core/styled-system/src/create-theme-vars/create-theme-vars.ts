import { Dict } from '@wallace-ui/utils';
import { walkObject } from '@wallace-ui/utils/src/walk-object';
import { ThemeScale } from './theme-tokens';
import { cssVar } from './css-var';
import { calc, Operand } from './calc';

// ???
export interface CreateThemeVarsOptions {
  cssVarPrefix?: string;
}

// ???
export interface ThemeVars {
  cssVars: Dict;
  cssMap: Dict;
}

/**
 * 테마 객체와 접두어를 받아서 CSS var를 생성한다.
 *
 * @see [MDN Reference - var()](https://developer.mozilla.org/ko/docs/Web/CSS/var())
 */
export function createThemeVars(target: Dict, options: CreateThemeVarsOptions) {
  const context: ThemeVars = {
    cssMap: {},
    cssVars: {},
  };

  walkObject(target, (value, path) => {
    const [firstKey] = path;
    const handler = tokenHandlerMap[firstKey] ?? tokenHandlerMap.defaultHandler;
    const { cssVars, cssMap } = handler(path, value, options);

    Object.assign(context.cssVars, cssVars);
    Object.assign(context.cssMap, cssMap);
  });

  return context;
}

// ???
type TokenHandler = (
  keys: string[],
  value: unknown | { reference: string },
  options: CreateThemeVarsOptions
) => ThemeVars;

/**
 * Definition transformation handlers for ThemeScale.
 */
const tokenHandlerMap: Partial<Record<ThemeScale, TokenHandler>> & {
  defaultHandler: TokenHandler;
  [key: string]: any;
} = {
  space: (keys, value, options) => {
    const properties = tokenHandlerMap.defaultHandler(keys, value, options);
    const [firstKey, ...referenceKeys] = keys; // e.g. firstKey: 'space', referenceKeys: ['1']
    const negativeLookupKey = `${firstKey}.-${referenceKeys.join('.')}`;
    const negativeVarKey = keys.join('-');
    const { variable, reference } = cssVar(
      negativeVarKey,
      undefined,
      options.cssVarPrefix
    );
    const negativeValue = calc.negate(value as Operand);
    const varRef = calc.negate(reference);

    return {
      cssVars: properties.cssVars,
      cssMap: {
        ...properties.cssMap,
        [negativeLookupKey]: {
          value: `${negativeValue}`,
          var: `${variable}`,
          varRef,
        },
      },
    };
  },
  defaultHandler: (keys, value, options) => {
    const lookupKey = keys.join('.');
    const varKey = keys.join('-');

    const { variable, reference } = cssVar(varKey, undefined, options.cssVarPrefix);

    return {
      cssVars: {
        [variable]: value,
      },
      cssMap: {
        [lookupKey]: {
          value,
          var: variable,
          varRef: reference,
        },
      },
    };
  },
};
