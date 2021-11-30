module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // React rules
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents:
          'function-declaration' | 'function-expression' | 'arrow-function',
        unnamedComponents: 'function-expression' | 'arrow-function',
      },
    ],
  },
};
