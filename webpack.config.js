const path = require('path');
const appFolderBase = path.join(__dirname, 'app');
module.exports = {
  mode: 'development',
  devServer: {
    contentBase: appFolderBase,
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

      { 
        test: /\.ts$/, 
        loader: "ts-loader"
      },
      { 
        test: /\.ts$/, 
        enforce: 'pre',
        use: [{ loader:'baggage-loader?[file].html&[file].css'  }]
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'ngtemplate-loader?requireAngular' },
          { loader: 'html-loader' }
        ]
      }
    ]
  }
};
