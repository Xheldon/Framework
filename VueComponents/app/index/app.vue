<template>
    <div>
        {{msg}}
        <com-header :channel="channelname"></com-header>
        <div class="content">
            <com-list :a="parentsItems">
                <template slot="list-item" scope="tempObj">
                    <li>{{tempObj.shit}}</li>
                </template>
            </com-list>
            <com-todolist :shit="blob" @haha="something()"></com-todolist>
            <input type="text" @click="test1()">
        </div>
        <!--<com-footer>-->
            <!--<div slot="channel">-->
                <!--父级 footer 内容-->
            <!--</div>-->
        <!--</com-footer>-->
    </div>
</template>

<script>
import comHeader from '../components/header.vue';
import comFooter from '../components/footer.vue';
import comList from '../components/list.vue';
import comTodolist from '../components/todoList.vue';
export default{
	data(){
		return {
			msg: 'xheldon',
			touchme: function(){
				alert('now you touch me!')
			},
            channelname: '海淘频道',
            parentsItems:[{
			    text: 'first'
            },{
                text: 'second'
            },{
                text: 'third'
            }],
            parentInput: '',
            ss:'属性-动态语法',
            blob: 'shit'
		}
	},
    methods: {
	    msg(){
	        return 'i m not xheldon'
        },
        something(){
	        console.log('parent:',...arguments);
            this.blob = arguments;
        },
        test1(){
            console.log(...arguments)
        }
    },
    components: {
	    comHeader, comFooter, comList, comTodolist
    }
}
</script>
<style>
body{
    margin: 0;
    padding: 0;
	background: #eee;
	font-size: 14px;
	color: #333;
}
.content{
    height: 100vh;
    width: 100%;
    background-color: cadetblue;
}
</style>