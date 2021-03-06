const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production',
  // entry: './index.js',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './template.html',
        inject: true,
      }
    ),
  ]
}