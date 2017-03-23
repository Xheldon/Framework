var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../config');
var colors = require('colors');
var proxyMiddleware = require('http-proxy-middleware');
var webpackConfig = process.env.NODE_ENV === 'testing'
    ? require('./webpack.prod.conf')
    : require('./webpack.dev.conf');

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable;

var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false,//显示提取的chunks详细信息
        children: false,//禁止显示Child: extract-text-webpack-plugin:xxxx信息
        assets: false,//禁止显示打包了哪些文件
        version: true,//显示webpack版本
        hash: false,//禁止显示打包hash
        timings: false,//禁止显示打包用时
        chunkModules: false
    },
    reporter: function(reporterOptions){
        var state = reporterOptions.state;
        var stats = reporterOptions.stats;
        var options = reporterOptions.options;
        var date = new Date();
        if(state) {
            var displayStats = (!options.quiet && options.stats !== false);
            if(displayStats && !(stats.hasErrors() || stats.hasWarnings()) &&
                options.noInfo)
                displayStats = false;
            if(displayStats) {
                options.log(stats.toString(options.stats));
            }
            if(!options.noInfo && !options.quiet) {
                if(stats.hasErrors()) {
                    options.log("Webpack: 编译失败，请检查控制台调试！".bgRed.yellow);
                } else if(stats.hasWarnings()) {
                    options.log("Webpack: 编译过程存在警告！".yellow);
                }else{
                    options.log(("Webpack: 编译成功！" + date.getHours() + '点' + date.getMinutes()  + '分' + date.getSeconds()  + '秒' + date.getMilliseconds()).bgGreen.yellow );
                }
            }
        } else {
            options.log("------".magenta);
            options.log("Webpack: 编译中...".blue);
        }
    },
    log: function(msg){
        if(msg.indexOf('webpack: wait until bundle finished: ') === 0 ){
            var pageName = msg.split('webpack: wait until bundle finished: ')[1];
            console.log(('\n请等待编译完成，再尝试访问: ' + pageName).red);
        }else{
            console.log(msg);
        }
    }
});

var hotMiddleware = require('webpack-hot-middleware')(compiler,{
    log: function(msg){
        if(msg !== 'webpack building...'){
            // 此处已由 webpack-dev-middleware 输出编译过程，因此此处阻止它显示building
            console.log(msg);
        }
    }
});
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation){
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb){
        hotMiddleware.publish({action: 'reload'});
        cb()
    })
});

// proxy api requests
Object.keys(proxyTable).forEach(function(context){
    var options = proxyTable[context];
    if(typeof options === 'string'){
        options = {target: options}
    }
    app.use(proxyMiddleware(context, options))
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
var staticPath = path.join(config.build.assetsPublicPath, config.build.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

module.exports = app.listen(port, function(err){
    if(err){
        console.log(err);
    }
});
