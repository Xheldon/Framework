<template>
    <ul>
        <li>这个 li 不由父级数据决定</li>
        <li>{{a}}</li>
        <li>{{ab}}</li>
        <slot name="list-item"
        v-for="item in a"
        :shit="item.text">
            这个列表是空的?
        </slot>
    </ul>
</template>
<style>

</style>
<script>
    export default{
        data(){
            console.log('first:',this);//list 的实例
            return {
                abc: 'a',//属性 a 代表的值挂在 data 上, 但是被下面的 prop 属性同名覆盖(查看上面控制台输出的内容即可)
                f: 'd'
            }
        },
        computed: {
            ab(){
                return 'computed a';//如果下面的 porps 数组中的 a 不存在的话, 那么返回 'a', 而现在 props 有个同名的属性, 因此
            }
        },
        methods:{
          ab: function(){
              return 'method a'
          }
        },
        props: ['a'],//和 data 中的 a 属性同名, 因此来自父级的数据将 data 中的同名属性上的数据覆盖.(注:父级是根组件, 挂载在一个实例上)
        name: 'com-list'
    }
</script>