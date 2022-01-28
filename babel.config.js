module.exports = {
  plugins: [
    '@wallace-ui/babel-plugin',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        loose: true,
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
};
