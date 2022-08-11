const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  mode: 'development',
  entry: resolve('src/index.js'),
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  },
  devServer: {
    port: 9000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html'),
      inject: "head"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
}
