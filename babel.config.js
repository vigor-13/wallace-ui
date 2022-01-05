const BABEL_ENV = process.env.BABEL_ENV;
const cjs = BABEL_ENV !== undefined && BABEL_ENV === 'cjs';

module.exports = {
  plugins: ['@babel/plugin-transform-runtime'], // for async/await
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        modules: cjs ? 'commonjs' : false,
        loose: true,
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
};
