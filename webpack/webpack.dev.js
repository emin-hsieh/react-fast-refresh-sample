const { merge } = require('webpack-merge');
const webpack = require('webpack');

const config = require('./webpack.config.js');

const devConfig = {
  mode: 'development',
  entry: ['react-hot-loader/patch', './index.js'],
  devtool: 'eval',
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' }
  },
  devServer: {
    hot: true,
    open: 'Google Chrome'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}

module.exports = merge(devConfig, config);


