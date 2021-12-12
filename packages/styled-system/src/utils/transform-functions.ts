import { isNumber } from '@wallace-ui/utils';

/**
 * CSS 값을 받아서 값과 단위 등의 정보를 분석하여 리턴
 * @param value
 */
const analyzeCSSValue = (value: number | string) => {
  const num = parseFloat(value.toString()); // 숫자만 추출
  const unit = value.toString().replace(String(num), ''); // 단위만 추출
  return { unitless: !unit, value: num, unit };
};

/**
 * CSS 관련 변환 함수 모음
 */
export const transformFunctions = {
  px(value: number | string) {
    if (value == null) return value;
    const { unitless } = analyzeCSSValue(value);
    return unitless || isNumber(value) ? `${value}px` : value;
  },
};
