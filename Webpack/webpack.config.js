var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

//定义文件夹路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

//提取CSS代码，生成单独的CSS文件
var extractCSS = new ExtractTextPlugin('css/[name].[hash:7].css');

// 获取单页面入口文件(多页面写法不同)
var entries = {'index': path.join(SRC_PATH, 'js/') + 'index.js'};


// 添加HMR模块，只用于开发模式
entries["webpack-dev-server"] = "webpack-dev-server/client?http://0.0.0.0:8167/";

// webpack 配置项
var config = {
    //源代码文件
    entry: entries,

    //输出文件夹
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].[hash:7].js',
        chunkFilename: 'js/[id].chunk.js',
        publicPath: '/'
    },

    //开发调试时启动nodejs服务器
    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 8167,
        host: "0.0.0.0"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: extractCSS.extract('style-loader', 'css-loader!sass-loader', {publicPath: '../'}),
                exclude: /node_modules/
            },

            {
                test: /\.css$/,
                loader: extractCSS.extract('style-loader', 'css-loader', {publicPath: '../'})
            },

            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader?name=img/[name].[hash:7].[ext]&limit=10000',
                exclude: /node_modules/
            },

            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /(node_modules|bower_components)/
            },

            {
                test: /\.ejs$/,
                loader: 'ejs-compiled',
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    plugins: [
        // 需要直接复制的文件
        new CopyWebpackPlugin([
            // 所有img标签引用的非临时图片放到img/embed目录下
            {
                from: path.join(SRC_PATH, 'img/embed'),
                to: 'img/embed'
            }
        ], {}),

        // 提供jQuery作为全局对象
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery'
        }),

        // 提取公用模块(单页面用不到,仅在多页面时候使用,此处仅作示例)
        new CommonsChunkPlugin({
            name: 'commons',
            chunks: 'index',
            minChunks: 2
        }),

        // 生成CSS文件
        extractCSS,
        // 生成单独html页面(仅仅示例,生成多页面写法不同)
        new HtmlWebpackPlugin({
            template: path.join(SRC_PATH, 'tpl/') + 'index.ejs',
            filename: 'index.html',
            chunks: ['commons', 'index', 'webpack-dev-server'],
            inject: 'body'
        })
    ]

};

module.exports = config;