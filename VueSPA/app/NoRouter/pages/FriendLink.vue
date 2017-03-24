<template>
    <com-main>
        <div slot="content" class="content">这里是友链的内容</div>
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