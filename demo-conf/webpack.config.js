const Path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: Path.resolve('./build')
    },
    devServer: {},
    module: {},
    plugins: [],
    mode: 'development',
    resolve: {}
}