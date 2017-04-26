 var path = require('path');

exports.ROOT_PATH = ROOT_PATH = path.resolve(__dirname);//根路径
exports.APP_PATH = APP_PATH = path.resolve(ROOT_PATH, 'app');//开发路径
exports.BUILD_PATH = BUILD_PATH = path.resolve(ROOT_PATH, 'build');//输出路径

// three type of switch : NoRouter, NoRouterWithIs, Router

<<<<<<< HEAD
<<<<<<< HEAD
let on = 'NoRouter';
=======
let on = 'Router';
>>>>>>> 32409fd... Vue 实现单页应用的三种方式
=======
let on = 'NoRouter';
>>>>>>> f1a7898... 完成吸顶测试

switch (on){
    case 'NoRouter':
        exports.entry = path.resolve(APP_PATH, 'NoRouter/app.js');
        exports.template = 'app/NoRouter/tpl.html';
        break;
    case 'NoRouterWithIs':
        exports.entry = path.resolve(APP_PATH, 'NoRouterWithIs/app.js');
        exports.template = 'app/NoRouterWithIs/tpl.html';
        break;
    case 'Router':
        exports.entry = path.resolve(APP_PATH, 'Router/app.js');
        exports.template = 'app/Router/tpl.html';
        break;
    default:
        exports.entry = path.resolve(APP_PATH, 'NoRouter/app.js');
        exports.template = 'app/NoRouter/tpl.html';
        break;
}