var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin'); 

var  ExtractTextPlugin= require('extract-text-webpack-plugin');

var config = require('./config.js');

module.exports = {
	entry: {
		app: config.entry
    },
	output: {
		path: config.BUILD_PATH,
		filename: '[name].[hash:7].js',
		chunkFilename: '[id]-[name].js'
	},
	resolve: {
	    extensions:['', '.vue', '.js'],
		alias: {
            //注意, 这里导入的是/node_module/vue/dist/vue.js, 跟 vue-router.js 的不同
			vue$: 'vue/dist/vue.js'
		}
	},
	//开启 dev source map
	devtool: 'eval-source-map',
	//开启 dev source map
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
        host: '0.0.0.0'
	},
	module: {
		loaders:[
			{
				test: /\.vue$/,
				loader: 'vue'
			},
            {
                test: /\.css$/,
                // loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap'
            },
			{
				test: /\.js$/,
				loader: 'babel',
				include: config.ROOT_PATH,
				exclude: /node_modules/
			}/*,
			{
				test: /\.html$/,
				loader: 'vue-html',
				exclude: /tpl/
			}*/,
            //字体
            {
                test: /\.((ttf|eot|woff|svg)(\?t=[0-9]\.[0-9]\.[0-9]))|(ttf|eot|woff|svg)\??.*$/,
                loader: 'url?limit=10000&name=fonts/[name].[ext]'
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'img/[name].[ext]'
                }
            },
		]
	},
	vue:{
		loaders: {
            // css: ExtractTextPlugin.extract('css-loader')
            scss: 'style-loader!css-loader!sass-loader',
            css: 'style-loader!css-loader'
		}
	},
	plugins:[
		new HtmlwebpackPlugin({
			title: 'app',
			filename: 'index.html',
			template: config.template,
			chunks: ['app'],
			inject: 'body'
		}),
        new ExtractTextPlugin('css/[name].[hash:7].css')
	]
};
// 1. 第一个