import Vue from 'vue'
import Index from './app.vue'
import comHeader from '../components/header.vue'
import '../css/test_one.css'
window.app = new Vue({
	el: '#body',//html中的 id
    data: {
	    a: 'shit'
    },
	method: {
	    a(){
	        return 'shit+1'
        }
    },
	computed:{
	    a(){
	        return 'shit+2'
        }
    },
	components:{
		App: Index
	}
});