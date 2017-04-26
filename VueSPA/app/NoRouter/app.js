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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f1a7898... 完成吸顶测试
    methods:{
        scroll(){
            console.log('scr')
        }
    },
<<<<<<< HEAD
    render(h){//组件依赖的 data 改变后, render 会重新渲染
        return h(this.viewComponent)
    }
=======
    render(h){//组件依赖的 data 改变后, render 会重新渲染
        return h(this.viewComponent)
    }

>>>>>>> 32409fd... Vue 实现单页应用的三种方式
=======
    render(h){//组件依赖的 data 改变后, render 会重新渲染
        return h(this.viewComponent)
    }
>>>>>>> f1a7898... 完成吸顶测试
});
// 点击返回和前进按钮的时候触发此事件
window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
});