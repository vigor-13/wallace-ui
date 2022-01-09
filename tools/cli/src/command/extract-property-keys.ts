import { isObject } from '@wallace-ui/utils';

/**
 * Extract textStyles keys
 */
export function extractPropertyKeys(
  theme: Record<string, unknown>,
  themePropertyName: string
) {
  const themeProeprty = theme[themePropertyName];
  if (!isObject(themeProeprty)) {
    return [];
  }

  return Object.keys(themeProeprty);
}
