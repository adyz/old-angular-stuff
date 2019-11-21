const path = require('path');
module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    compress: true,
    port: 9000
  },
  entry: './app/index.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.ts$/, use: [ "ts-loader" ] },
      { test: /\.html$/, use: [ "html-loader" ] },
    ]
  }
};
