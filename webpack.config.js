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
      { test: /\.ts$/, loader:  "ts-loader" },
      {
        test: /\.html$/,
        use: [
          { loader:'ngtemplate-loader?requireAngular&module=app&relativeTo=' + (path.resolve(__dirname, './app')) },
          { loader: 'html-loader' }
        ],
        exclude: /index\.html/
      },
    ]
  }
};
