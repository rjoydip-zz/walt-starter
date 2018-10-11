const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const _plugins = env => {
  if(env && (env.production || env.development)) {
    return [
      new CleanWebpackPlugin('dist'),
      new webpack.HotModuleReplacementPlugin(),
    ];
  } else {
    return [
      new CleanWebpackPlugin('pref'),
    ];
  }
}

module.exports = env => ({
  mode: env && env.production ? 'production' : 'development',
  resolve: {
    extensions: [".walt", ".js"]
  },
  module: {
    rules: [{
      test: /\.walt$/,
      use: 'walt-loader'
    }],
    noParse: [
      /benchmark/,
    ]
  },
  plugins: _plugins(env),
  entry: (env && (env.production || env.development)) ? './src/index.js' : './pref.js',
  output: {
    filename: (env && (env.production || env.development)) ? 'bundle.js': 'bundle.js',
    path: (env && (env.production || env.development)) ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, 'pref'),
  },
  devServer: {
    hot: true,
    port: 9000,
    compress: true,
    contentBase: path.join(__dirname, '.'),
  }
});