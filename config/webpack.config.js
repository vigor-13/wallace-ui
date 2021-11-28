const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],
  module: {
    rules: [
      // Babel 설정
      {
        test: /\.(js|jsx|ts|tsx)$/,    
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
              '@babel/preset-typescript',
              '@emotion/babel-preset-css-prop',
            ],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      // CSS 설정
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Typescript 설정
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
  },
};
