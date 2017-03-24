import bootstrap from '../commons/css/bootstrap.css';
import Vue from 'vue';
import routes from './routes'
const xheldon = new Vue({
    el: '#body',
    data:{
        currentRoute: window.location.pathname
    },
    components:(function(){
        let temp = {};
        for(let i in routes){
            temp[i] = require('./pages/' + routes[i] + '.vue');
        }
        return temp;//无法匹配没有命中路由的情况
    }())
});
// 点击返回和前进按钮的时候触发此事件
window.addEventListener('popstate', () => {
    xheldon.currentRoute = window.location.pathname
});