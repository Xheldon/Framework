import Home from './pages/Home.vue'
import About from './pages/About.vue'
import FriendLink from './pages/FriendLink.vue'

export default [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/fl/:this_is_a_params_key?', component: FriendLink }//参数路径后面加个问号表示可选参数
]