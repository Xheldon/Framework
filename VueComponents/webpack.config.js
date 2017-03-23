var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin'); 

// 常用配置,项目较小不抽出了
var ROOT_PATH = path.resolve(__dirname);//根路径
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');


module.exports = {
	entry: {
		app: path.resolve(APP_PATH, 'app.js')
	},
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		fallback: [path.join(__dirname, './node_modules')],
		alias: {
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
				test: /\.js$/,
				loader: 'babel',
				include: ROOT_PATH,
				exclude: /node_modules/
			},
			{
				test: /\.css/,
				loader: 'style'
			},
			{
				test: /\.css/,
				loader: 'css'
			},
			{
				test: /\.html$/,
				loader: 'vue-html'
			},
			{
        		test: /vux.src.*?js$/,
        		loader: 'babel'
      		}
		]
	},
	vue:{
		loaders: {
			test: /\.vue$/,
			loaders: 'vue-style'
		}
	},
	plugins:[
		new HtmlwebpackPlugin({
			title: 'Vue component test',
			filename: 'dist.html',
			template: 'app/index.html',
			inject: true
		})
	]
}