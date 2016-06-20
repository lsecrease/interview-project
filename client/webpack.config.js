const path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(process.cwd(), '../app/assets/javascripts'),
    publicPath: '/javascripts/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
    }, {
      test: /\.css$/,
      include: /node_modules/,
      loaders: ['style-loader', 'css-loader'],
    },]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
