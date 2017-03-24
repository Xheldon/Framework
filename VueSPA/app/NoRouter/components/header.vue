<template>
    <header>
        <ul>
            <li><com-link href="/">主页</com-link></li>
            <li><com-link href="/about">关于</com-link></li>
            <li><com-link href="/fl">友链</com-link></li>
        </ul>
    </header>
</template>
<script>
    import comLink from './link.vue'
    export default{
        data(){
            return {
                myname: 'Xheldon.com'
            }
        },
        props: ['title'],
        components: {
            comLink
        }
    }
</script>
<style scoped lang="scss">
    header{
        position: fixed;
        top:0;
        height: 40px;
        line-height: 40px;
        width: 100%;
        background-color: #000;
        color: #fff;
        li{
            float: left;
            list-style: none;
            margin-right: 20px;
        }
        a{
            color: #fff;
        }
    }
</style>