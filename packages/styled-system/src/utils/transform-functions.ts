import { isCssVar, isNumber, isString } from '@wallace-ui/utils';

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
  blur: wrap('blur'),
};
