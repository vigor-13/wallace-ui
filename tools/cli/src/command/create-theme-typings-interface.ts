import { isObject } from '@wallace-ui/utils';
import { extractPropertyPaths, printUnionMap } from './extract-property-paths';
import { extractPropertyKeys } from './extract-property-keys';
import { extractColorSchemeTypes } from './extract-color-schemes';
import {
  extractComponentTypes,
  printComponentTypes,
} from './extract-component-types';
import { formatWithPrettierIfAvailable } from '../utils/format-with-prettier';

export interface ThemeKeyOptions {
  /**
   * 테마 객체의 프로퍼티 키
   * @example colors
   */
  key: string;
  /**
   * 최대 추출 레벨
   * @default 1
   */
  maxScanDepth?: number;
  /**
   * 추출된 값에 적용할 필터링 함수
   *
   * @example
   * Exclude numeric index values from `breakpoints`
   *
   * @default
   * () => true
   */
  filter?: (value: string) => boolean;
  /**
   * @default
   * value => value
   */
  flatMap?: (value: string) => string | string[];
}
export interface CreateThemeTypingsInterfaceOptions {
  config: ThemeKeyOptions[];
  strictComponentTypes?: boolean;
}
export async function createThemeTypingsInterface(
  theme: Record<string, unknown>,
  options: CreateThemeTypingsInterfaceOptions
) {
  const { config, strictComponentTypes = false } = options;
  const unions = config.reduce((allUnions, opts) => {
    const {
      key,
      maxScanDepth,
      filter = () => true,
      flatMap = (value) => value,
    } = opts;

    const target = theme[key];

    if (isObject(target) || Array.isArray(target)) {
      allUnions[key] = extractPropertyPaths(target, maxScanDepth)
        .filter(filter)
        .flatMap(flatMap);
    } else {
      allUnions[key] = [];
    }

    return allUnions;
  }, {} as Record<string, string[]>);

  const textStyles = extractPropertyKeys(theme, 'textStyles');
  const layerStyles = extractPropertyKeys(theme, 'layerStyles');
  const colorSchemes = extractColorSchemeTypes(theme);
  const componentTypes = extractComponentTypes(theme);

  const template = `
    // regenerate by running
    // npx @wallace-ui/cli tokens path/to/your/theme.(js|ts)
    export interface ThemeTypings {
      ${printUnionMap({ ...unions, textStyles, layerStyles, colorSchemes })}
      ${printComponentTypes(componentTypes, strictComponentTypes)}
    }
  `;

  return formatWithPrettierIfAvailable(template);
}
