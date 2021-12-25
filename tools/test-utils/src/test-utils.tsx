import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';

// ???
type UI = Parameters<typeof rtlRender>[0];

/**
 * 렌더 함수에서 조건부 로직이 사용되는 것을 방지하기 위해 사용되는 대체 함수이다.
 */
function ChildrenPassthrough({ children }: { children: React.ReactElement }) {
  return children;
}

// ???
export interface TestOptions extends Omit<RenderOptions, 'wrapper'> {
  /**
   * optional additional wrapper, e.g. Context
   *
   * @example
   * ```ts
   * // single wrapper
   * render(<MyComponent />, {
   *  wrapper: MyContext
   * });

   * // multiple wrapper
   * render(<MyComponent />, {
   *  wrapper: ({ children }) => (
   *    <ContextA>
   *      <ContextB>
   *        {children}
   *      </ContextB>
   *    </ContextA>
   *  )
   * });
   * ```
   */
  wrapper?: typeof ChildrenPassthrough;
}

/**
 * `@testing-library/react`의 `render` 함수를 커스터마이징한 대체 함수이다.
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 * @param component 테스트 대상 컴포넌트
 * @param options 커스텀 테스트 옵션
 */
export const render = (
  ui: UI,
  { wrapper: Wrapper = ChildrenPassthrough, ...options }: TestOptions = {}
): RenderResult => rtlRender(<Wrapper>{ui}</Wrapper>, options);
