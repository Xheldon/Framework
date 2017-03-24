import bootstrap from '../commons/css/bootstrap.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'
Vue.use(VueRouter);
const router = new VueRouter({
    routes
});
const xheldon = new Vue({
    el:'#body',
    router
});
//for test checkout

