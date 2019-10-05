const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
}
var nodeExternals = require('webpack-node-externals')
module.exports = {
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()] // in order to ignore all modules in node_modules folder
}
module.exports = {
  mode: 'development',
  entry: './js/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
