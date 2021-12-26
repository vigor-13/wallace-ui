import { omit, UnionStringArray } from '@wallace-ui/utils';
import { ThemingProps } from './system.types';

/**
 * wallace-ui 컴포넌트에서 사용되는 엄선된 DOM 엘리먼트 목록
 * ex) `wallace.<element>` systax.
 */
// prettier-ignore
export const domElements = [
  'a', 'article', 'aside',
  'b', 'blockquote', 'button',
  'caption', 'cite', 'circle', 'code',
  'dd', 'div', 'dl', 'dt',
  'fieldset', 'figcaption', 'figure', 'footer', 'form',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hr',
  'img', 'input',
  'kbd',
  'label', 'li', 
  'main', 'mark',
  'nav',
  'ol',
  'p', 'path', 'pre',
  'q',
  'rect',
  's', 'svg', 'section', 'select', 'strong', 'small', 'span', 'sub', 'sup',
  'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'tr',
  'ul',
] as const;

export type DOMElement = UnionStringArray<typeof domElements>;

export function omitThemingProps<T extends ThemingProps>(props: T) {
  return omit(props, ['styleConfig', 'size', 'variant', 'colorScheme']);
}
