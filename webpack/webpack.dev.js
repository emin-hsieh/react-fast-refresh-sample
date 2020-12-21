const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const cfg = require('./webpack.config.js');

const devCfg = {
  mode: 'development',
  entry: ['./index.js'],
  devtool: 'eval',
  devServer: {
    hot: true,
    open: 'Google Chrome'
  },
  plugins: [
    new ReactRefreshWebpackPlugin()
  ],
}

module.exports = merge(devCfg, cfg);


