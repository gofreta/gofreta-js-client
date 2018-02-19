const webpack      = require('webpack');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        libraryTarget: 'umd',
        library:       'Client',
        filename:      'client.min.js',
        path:          (__dirname + '/dist')
    },
    module: {
        loaders: [{
            test:    /\.js$/,
            exclude: /node_modules/,
            loader:  'babel-loader'
        }]
    },
    resolve: {
        alias: {
            '@': (__dirname + '/src')
        }
    },
    plugins: [
        new webpack.BannerPlugin(`${(new Date()).getFullYear()} Gofreta https://gofreta.com`),
        new MinifyPlugin({
            keepFnName: true,
            keepClassName: true
        })
    ]
};
