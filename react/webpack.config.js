//var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: { path: __dirname, filename: 'bundle.js' },
  devtool: 'eval-source-map',
  module: {
    plugins: [
     new webpack.ProvidePlugin({
       'fetch': 'imports?this=>global+exports?global.fetch!whatwg-fetch'
     })
    ],

    loaders: [
      { 
        test: /\.css$/,
        loader: 'style-loader!css-loader!' 
      },

      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },

      {
        test: /\.js?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      }
    ]
  },
};
