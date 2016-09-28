var webpack = require('webpack');

module.exports = {
  entry: './app/main',
  output: { path: __dirname, filename: './dist/bundle.js' },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
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
        loader: 'style!css!' 
      },

      {
        test: /\.ts/,
        loader: 'ts-loader',
        exclude: "node_modules"
      }
    ]
  },
};
