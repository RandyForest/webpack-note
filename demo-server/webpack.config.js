let Path = require('path');
const Webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: Path.resolve('./build')
    },
    devServer: {
        open: true,
        port: 8181,
        contentBase: 'src',
        hot: true
    },
    module: {},
    plugins: [
        // 启动热更新时需要
        new Webpack.HotModuleReplacementPlugin()
    ],
    mode: 'development',
    resolve: {}
}