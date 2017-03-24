<template>
    <div>
    <input id="inputtest" type="text"
    @keyup.space="addToList"
    v-model="todotext" value="这个是初始化的, 哈哈啊哈"
    />
    <ul>
        <li v-for="(value, key) in todolist" :key="value.truekey">{{value.truekey}}:{{value.truevalue}}<button @click="deletetodo(key)">X</button></li>
    </ul>
    <div @click="testfinally()">究极测试</div>
    <div v-for="(v, k, i) in forinobj" :key="i">{{v}}-{{k}}-{{i}}</div>
        <input @keyup.alt.ctrl="presskey">input按键测试
        <div @keyup.alt="presskey">div按键测试</div>
        <div @keyup.alt="presskey">div冒泡按键测试
            <input type="text">
        </div>
        模拟 v-model 测试
        <textarea @input="input" ref="inputvalue"></textarea>
        <p>{{message}}</p>
        多个 v-model 测试:
        <input type="checkbox" v-model="mess" />
        <input type="checkbox" v-model="mess" />
        <!--<input type="checkbox" v-model="messages">-->
        <p>{{mess}}</p>
        单个checkbox v-model 测试:
        <input type="checkbox" v-model="singleModel" :true-value="sa" :false-value="sb" />
        <p>{{singleModel}}</p>
        单个radio v-model 测试:
        <input type="radio" v-model="singleModel2" :value="sa2" />
        <p>{{singleModel2}}</p>
        单选 select 测试:
        <select v-model="select">
            <option v-for="option in options">{{option.text}}</option>
        </select>
        <span>{{select}}</span>
        多选 select 测试:
        <select v-model="selectM" multiple>
        <option value="aaa">a</option>
        <option>b</option>
        <option>c</option>
        <option>d</option>
    </select>
        <span>{{selectM}}</span>
        动态语法测试:
    <div>{{dynamic}}</div>
        <button @click="alertProp"> 点我看上面 prop的类型</button>
        <input type="text" @input="shuru($event)"/>
        <span>{{shit}}</span>
        <br>
        动画测试:
        <button type="button" @click="show=!show">点击我切换状态</button>
        <transition name="go"
                    appear
                    appear-class="appear-a"
                    appear-active-class="appear-b"
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
        >
            <p v-if="show">
                点击展示我, 再点击一下隐藏我.
            </p>
        </transition>
        <br>
        <div class="button-animate">
            <transition name="go">

                <button key="a" v-if="isShow" @click="animakkey">on</button>
            <button key="b" v-else @click="animakkey">off</button>
            </transition>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            console.log('for in obj:', this);
            return{
                docstate: 'saved',
                show:true,
                todolist:[],
                truekey: 0,
                todotext:'是谁在唱歌?',
                forinobj:{
                    firstname: 'cao',
                    lastname: 'xheldon',
                    age: 30
                },
                message: '',
                messages: [],
                mess: '',
                v1:'xheldon1',
                v2:'xiaodan2',
                select: 'B',
                selectM: [],
                options: [
                    {text: 'first', value: 'A'},
                    {text: 'second', value: 'B'},
                    {text: 'third', value: 'C'}
                ],
                singleModel: 'not choice',
                singleModel2: 'not choice 2',
                sa:'im true',
                sa2:'im true2',
                sb: 'im false',
                status: 'off',
                isShow: true
            }
        },
        props:['dynamic', 'shit'],
        methods: {
            addToList(){
                this.todolist.push({truevalue:this.todotext, truekey: ++this.truekey});
            },
            deletetodo(key){
                console.log(arguments);
                this.todolist.splice(key, 1);
            },
            testfinally(){
//                return 'methods shit'
                return function(){
                    console.log('methods')
                }
            },
            shuru(e){
                this.$emit('haha', e.target.value,'shibushisha');
            },
            presskey(e){
                console.log(e);
            },
            input(){
                this.message = this.$refs.inputvalue.value;
                console.log(this.$refs.inputvalue.value + 'shit');
            },
            alertProp(){
                alert(typeof this.dynamic);
            },
            beforeEnter(el){console.log(el);console.log(1);},
            enter(){ console.log(2);},
            afterEnter(){ console.log(3);},
            enterCancelled(){ console.log(4);},
            beforeLeave(){ console.log(5);},
            leave(){console.log(6);},
            afterLeave(){ console.log(7);},
            leaveCancelled(){ console.log(8);},
            animakkey(){
                this.isShow = !this.isShow;
            }
        },
        computed:{
            /*deletetodo(){
                return function(){
                    console.log(arguments);
                    var key = 1;
                    this.todolist.splice(key, 1);
                }
            },*/
            buttonMessage() {
                switch (this.docstate) {
                    case 'saved': return 'Edit'
                    case 'edited': return 'Save'
                    case 'editing': return 'Cancel'
                }
            },
            testfinally(){
//                console.log('computed');
                return function(){
                    console.log('computed')
                }
            }
        }
    }
</script>
<style>



    /*.go-enter-active {*/
        /*transition: all 1s ease;*/
    /*}*/
    /*.go-leave-active {*/
        /*transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
    /*}*/
    /*.go-enter {*/
        /*transform: translateX(10px);*/
        /*opacity: 0;*/
    /*}*/
    /*.go-leave-active{*/
        /*transform: translateX(40px);*/
        /*opacity: 0;*/
    /*}*/
    .appear-a{
        transition: all 5s ease;
    }
    .appear-b{
        transition: all 5s ease;
    }
    .button-animate button{
        margin-left:20px;
        margin-top: 40px;
        transition: all 1s ease;
        position: absolute;
    }

    .go-leave-active{
         opacity: 0;
         transform: translateX(50px);
     }
    .go-leave{
       opacity: 1;
       transform: translateX(25px);
   }

    .go-enter-active{
        opacity: 1;
        transform: translateX(0px);
    }
    .go-enter{
        opacity: 0;
        transform: translateX(-25px);
    }

</style>