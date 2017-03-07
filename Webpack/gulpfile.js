var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var prettify = require('gulp-jsbeautifier');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');

// 开始webpack任务
gulp.task('webpack', function(callback){
    del.sync('build/*', '!build'); // 清空build文件夹

    // 删除多余的 chunks
    delete webpackConfig.entry["webpack-dev-server"];

    webpack(webpackConfig, function(err, stats){
        if(err) throw new gutil.PluginError('webpack', err);

        // 用来显示webpack打包过程中的log信息
        gutil.log('[webpack]', stats.toString({
            chunks: false,
            colors: true
        }));

        del.sync(['build/**/webpack-dev-server*']);

        callback();
    });

});


// 格式化html代码
gulp.task('prettify', ['webpack'], function(callback){
    return gulp.src('build/**/*.html').pipe(gulp.dest('build/'));
});

// 启动webpack调试服务器
gulp.task('server', function(callback){
    var server = new WebpackDevServer(webpack(webpackConfig), {
        stats: {
            colors: true
        }
    });

    server.listen(8167);
});

gulp.task('build', ['prettify']); // 用于开发