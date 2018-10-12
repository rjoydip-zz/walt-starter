const path = require('path');
const webpack = require('webpack');

module.exports = env => ({
  mode: env && env.production ? 'production' : 'development',
  resolve: {
    extensions: [".walt", ".js"]
  },
  module: {
    rules: [{
      test: /\.walt$/,
      use: 'walt-loader'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    hot: true,
    port: 9000,
    inline: true,
    compress: true,
    watchContentBase: true,
    contentBase: path.join(__dirname, '.'),
  }
});