import { types } from '@babel/core';
import { declare } from '@babel/helper-plugin-utils';

function isImported(path) {
  if (!types.isMemberExpression(path.node.callee)) {
    const callee = path.get('callee');
  }
}

export default declare((api) => {
  // REF: https://github.com/babel/babel/pull/7450
  api.assertVersion(7);

  return {
    name: 'transform-react-pure-annotations',
    visitor: {
      CallExpression(path) {},
    },
  };
});
