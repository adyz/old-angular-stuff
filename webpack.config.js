module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { 
        test: /\.js$/, 
        loader: 'babel', 
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      { 
        test: /\.html$/, 
        loader: 'html', 
        exclude: /node_modules/,
      }
    ]
  }
};
