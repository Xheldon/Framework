<template>
    <com-main>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f1a7898... 完成吸顶测试
        <div slot="content" class="content">
            <span class="item item-1">Xheldon 1</span>
            <span class="item item-2">Xheldon 2</span>
            <span class="item item-3">Xheldon 3</span>
            <span class="item item-4">Xheldon 4</span>
            <span class="item item-5">Xheldon 5</span>
        </div>
<<<<<<< HEAD
=======
        <div slot="content" class="content">这里是关于的内容</div>
>>>>>>> 32409fd... Vue 实现单页应用的三种方式
=======
>>>>>>> f1a7898... 完成吸顶测试
    </com-main>
</template>
<script>
    import comMain from '../components/default.vue'
    export default{//这个是 es6的导出, 和 commonsJS 的 module.exports 不一样
        components: {
            comMain
        },
        props:['className']
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f1a7898... 完成吸顶测试
</script>
<style lang="scss" scoped>
    .content{
        height: 200px;
        padding: 0;
        display: flex;
        flex-direction: row;
        & > span{
            height: 100px;
            padding: 10px;
            border: 1px solid #4cae4c;
        }
        .item{
            flex-grow: 1;
            flex-basis: 21px;
            flex-shrink: 0.5;
        }
        .item-2{
            flex-grow: 2;
            flex-basis: 0;
        }
    }
<<<<<<< HEAD
</style>
=======
</script>
>>>>>>> 32409fd... Vue 实现单页应用的三种方式
=======
</style>
>>>>>>> f1a7898... 完成吸顶测试
