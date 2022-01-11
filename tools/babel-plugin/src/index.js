import { types } from '@babel/core';
import { declare } from '@babel/helper-plugin-utils';
import annotateAsPure from '@babel/helper-annotate-as-pure';

const PURE_CALLS = new Map([
  ['@wallace-ui/system', ['forwardRef', 'memo']],
  ['@wallace-ui/react', ['forwardRef', 'memo']],
]);

/*
 * forwardRef 함수 import 확인:
  - forwardRef를 사용할 때 @wallace-ui/system or @wallace-ui/react 패키지에 정의된 
    커스텀 forwardRef 함수를 사용하고 있는지 확인하기 위함.
 */
function isImported(path) {
  if (!types.isMemberExpression(path.node.callee)) {
    const callee = path.get('callee');

    for (const [module, methods] of PURE_CALLS) {
      for (const method of methods) {
        if (callee.referencesImport(module, method)) {
          return true;
        }
      }
    }

    return false;
  }

  return false;
}

export default declare((api) => {
  // REF: https://github.com/babel/babel/pull/7450
  api.assertVersion(7);

  return {
    name: 'transform-react-pure-annotations',

    /*
     * AST node 방문자:
      - AST 트리에서 `특정 노드 타입`을 다루기 위한 메서드를 가지고 있는 객체이다.
      - REF: https://babeljs.io/docs/en/babel-types
     */
    visitor: {
      /*
       * CallExpression vs MemberExpression
        - CallExpression : console.log()
        - MemberExpression :  console.log

       * 방문자 안의 path:
        - path는 트리에서 노드의 위치에 대한 리액티브한 표현이다. 
        - path는 해당 노드에 대한 모든 정보를 포함하고 있다.
        - 방문자의 메서드는 노드에 직접 방문하지 않고 `path`를 통해서 작업을 수행한다. 
       */
      CallExpression(path) {
        if (isImported(path)) {
          /*
           * annotateAsPure:
            - 노드에 `#__PURE__` 주석을 추가해준다.
            - `#__PURE__` 주석은 babel minifier에 hint로 사용된다.
            - REF: https://babeljs.io/docs/en/babel-helper-annotate-as-pure
            - REF: https://stackoverflow.com/questions/61909829/what-is-the-purpose-of-these-comments-in-babel-output
           */
          annotateAsPure(path);
        }
      },
    },
  };
});
