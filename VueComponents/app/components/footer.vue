<template>
    <div id="footer">
        "默认 footer 内容", 父级没有传递 slot 的内容.<br/>
        "父级 footer 内容", 父级传递了 slot 的内容.
        <slot name="channel">默认 footer 内容</slot>
        <com-button>你好和再见</com-button>
        <div @click="clickme" :title="mustache" v-html="ha"></div>
        <div v-if=true :class="{my: 'name'}">如果转换成布尔值后为 true 则出现, 为 false 则被移除</div>
        <div v-bind:prop="'真相只有一个' | filterOne | filterTwo">查看 filter 函数的参数</div>
        <div v-if="false">you see me</div>
        <div v-else-if="undefined"> you not see me</div>
        <div v-else>finally you see me</div>
        <button type="button" @click="switchShowInput">点我切换</button>
        <template v-if="username">
            <input type="text" placeholder="user" key="shit" />
        </template>
        <template v-else>
            <input type="text" placeholder="email" key="shit" />
        </template>
        <div>{{a()}}</div>
        <div v-for="(value, key, index) in items">
            {{key}}-{{value}}
        </div>
        <div v-for="(value, key, index) in itemsObj">
            {{key}}-{{value}}-{{index}}
        </div>
    </div>
</template>
<style>
    #footer{
        width: 100%;
        height: 80px;
        background-color: darkseagreen;
    }
</style>
<script>
    import comButton from './button.vue';
    export default {
        data(){
            return {
                ha:'<span>this is a pure html structure, and be insert where is have v-html="ha"</span>',
                clickme: function(){
                    alert('you click me ')
                },
                mustache: 'can\'t use in attribute',
                rawProp: 'this is raw prop',
                f:true,
                username: true,
                items: [
                    {a: 'a'},
                    {b: 'b'},
                    {c: 'c'}
                    ],
                itemsObj: {
                    d: 'dd',
                    e: 'ed',
                    f: 'fd'
                }
            }
        },
        filters: {
            filterOne(){
                console.log(arguments);
                return 'this param is pass to next filter'
            },
            filterTwo(){
                console.log(arguments);
            },
        },
        props: {
            channel: String,
            require: true
        },
        methods: {
            switchShowInput(){
                this.username = !this.username;
            },
            a(){
                console.log('im from methods')
            }
        },
        computed: {
            ab(){
                console.log('im from computed')
            }
        },
        name: 'com-footer',
        components: {
            comButton
        }
    }
</script>