const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: ['./src/index.tsx', 'webpack-hot-middleware/client'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                include: [
                    path.join(__dirname, './'),
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/template.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        modules: ['node_modules'],
    },
}