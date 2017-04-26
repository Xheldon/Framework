import bootstrap from '../commons/css/bootstrap.css';
import Vue from 'vue';
import routes from './routes'

window.app = new Vue({
    el: '#body',
    data:{
        currentRoute: window.location.pathname,
    },
    computed:{
        viewComponent(){
            const matchingView = routes[this.currentRoute];
            return matchingView ? require('./pages/' + matchingView + '.vue') : require('./pages/404.vue')
        }
    },
    methods:{
        scroll(){
            console.log('scr')
        }
    },
    render(h){//组件依赖的 data 改变后, render 会重新渲染
        return h(this.viewComponent)
    }
});
// 点击返回和前进按钮的时候触发此事件
window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
});