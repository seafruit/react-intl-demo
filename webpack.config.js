var webpack = require("webpack");

module.exports = {
  entry: './entry.jsx',
  output: {
    path: __dirname + '/assets/',
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0']
      },

    }, {
      test: /\.less$/,
      exclude: /node_modules/,
      loader: "style!css!less"
    }, {
      test: /\.json$/,
      exclude: /node_modules/,
      loader: 'json'
    }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}