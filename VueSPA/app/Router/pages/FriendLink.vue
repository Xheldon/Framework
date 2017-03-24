<template>
    <com-main>
        <div slot="content" class="content">这里是友链的内容<br/>
        输出路由参数 $route.params 信息:
        {{$route.params}}<br/>
        修改地址栏 fl/xxx 查看变化</div>
    </com-main>
</template>
<script>
    import comMain from '../components/default.vue'
    export default{//这个是 es6的导出, 和 commonsJS 的 module.exports 不一样
        components: {
            comMain
        }
    }
</script>