import { Dict, isCssVar, isNumber, isString } from '@wallace-ui/utils';
import { globalSet, gradientTransform, isCSSFunction } from './parse-gradient';
import {
  backdropFilterTemplate,
  filterTemplate,
  getRingTemplate,
  getTransformGpuTemplate,
  getTransformTemplate,
} from './templates';

/**
 * CSS 값을 받아서 값과 단위 등의 정보를 분석하여 리턴
 * @param value
 */
const analyzeCSSValue = (value: number | string) => {
  const num = parseFloat(value.toString()); // 숫자만 추출
  const unit = value.toString().replace(String(num), ''); // 단위만 추출
  return { unitless: !unit, value: num, unit };
};

const wrap = (str: string) => (value: any) => `${str}(${value})`;

/**
 * CSS 관련 변환 함수 모음
 */
export const transformFunctions = {
  px(value: number | string) {
    if (value == null) return value;
    const { unitless } = analyzeCSSValue(value);
    return unitless || isNumber(value) ? `${value}px` : value;
  },
  fraction(value: any) {
    return !isNumber(value) || value > 1 ? value : `${value * 100}%`;
  },
  degree(value: any) {
    if (isCssVar(value) || value == null) return value;
    const unitless = isString(value) && !value.endsWith('deg');
    return isNumber(value) || unitless ? `${value}deg` : value;
  },
  bgImage(value: any) {
    if (value == null) return value;
    const prevent = isCSSFunction(value) || globalSet.has(value);
    return !prevent ? `url(${value})` : value;
  },
  bgClip(value: string) {
    return value === 'text'
      ? { color: 'transparent', backgroundClip: 'text' }
      : { backgroundClip: value };
  },
  filter(value: any) {
    return value !== 'auto' ? value : filterTemplate;
  },
  backdropFilter(value: any) {
    return value !== 'auto' ? value : backdropFilterTemplate;
  },
  outline(value: any) {
    const isNoneOrZero = String(value) === '0' || String(value) === 'none';
    return value !== null && isNoneOrZero
      ? { outline: '2px solid transparent', outlineOffset: '2px' }
      : { outline: value };
  },
  float(value: any, theme: Dict) {
    const map: { [key: string]: string } = { left: 'right', right: 'left' };
    return theme.direction === 'rtl' ? map[value] : value;
  },
  ring(value: string) {
    return getRingTemplate(transformFunctions.px(value));
  },
  transform(value: any) {
    if (value === 'auto') return getTransformTemplate();
    if (value === 'auto-gpu') return getTransformGpuTemplate();
    return value;
  },
  blur: wrap('blur'),
  opacity: wrap('opacity'),
  brightness: wrap('brightness'),
  contrast: wrap('contrast'),
  dropShadow: wrap('drop-shadow'),
  grayscale: wrap('grayscale'),
  hueRotate: wrap('hue-rotate'),
  invert: wrap('invert'),
  saturate: wrap('saturate'),
  sepia: wrap('sepia'),
  gradient: gradientTransform,
};
