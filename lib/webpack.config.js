const webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        process.cwd() + '/packages/react-deployment-container/src/index.js'
    ],
    output: {
        path: process.cwd(),
        publicPath: '/',
        filename: 'dist/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components|test)/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            // Capture eot, ttf, woff, and woff2
            test: /\.(eot|ttf|woff|woff2|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
        }, {
            // Capture eot, ttf, woff, and woff2
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
        }, ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        hot: true,
    },
}
