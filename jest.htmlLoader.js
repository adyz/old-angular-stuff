const htmlLoader = require('html-loader');
const path = require('path');
const appPath = path.resolve(__dirname, './app');

console.log('test');

module.exports = {
    process(src, filename, config, options) {
        return htmlLoader(src);
    }
}