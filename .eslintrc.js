module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  globals: {
    JSX: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  ignorePatterns: ['.eslintrc.js', 'commitlint.config.js', 'babel.config.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    ecmaFeatures: {
      jsx: true,
    },
    project: 'tsconfig.json',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'guard-for-in': 'off',
    'no-continue': 'off',
    'no-restricted-syntax': 'off',
    'prefer-object-spread': 'off',
    'no-restricted-exports': 'off',
    'import/no-cycle': 'off',
    'class-methods-use-this': 'off',

    /*
     * Typescript riles
     */
    '@typescript-eslint/naming-convention': 'off',

    /*
     * React rules
     */
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
  },
};
