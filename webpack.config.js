const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
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
