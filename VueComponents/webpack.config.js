var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin'); 

// 常用配置,项目较小不抽出了
var ROOT_PATH = path.resolve(__dirname);//根路径
var APP_PATH = path.resolve(ROOT_PATH, 'app');//开发路径
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');//输出路径
var  ExtractTextPlugin= require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: path.resolve(APP_PATH, 'index/app.js')
},
	output: {
		path: BUILD_PATH,
		filename: '[name].[hash:7].js',
		chunkFilename: '[id]-[name].js'
	},
	resolve: {
	    extensions:['', '.vue', '.js'],
		alias: {
            //注意, 这里导入的是/node_module/vue/dist/vue.js, 跟 vue-router.js 的不同
			vue: 'vue/dist/vue.js'
		}
	},
	//开启 dev source map
	devtool: 'eval-source-map',
	//开启 dev source map
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
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
				test: /\.js$/,
				loader: 'babel',
				include: ROOT_PATH,
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				loader: 'vue-html',
				exclude: /tpl/
			}
		]
	},
	vue:{
		loaders: {
            // css: ExtractTextPlugin.extract('css-loader')
            css: 'style-loader!css-loader'
		}
	},
	plugins:[
		new HtmlwebpackPlugin({
			title: 'app',
			filename: 'app.html',
			template: 'app/index/tpl.html',
			chunks: ['app'],
			inject: 'body'
		}),
        new ExtractTextPlugin('css/[name].[hash:7].css')
	]
};