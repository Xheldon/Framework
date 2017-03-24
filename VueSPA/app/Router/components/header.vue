<template>
    <header>
        <ul>
            <li><router-link to="/">主页</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
            <li><router-link to="/fl">友链</router-link></li>
        </ul>
    </header>
</template>
<script>
    export default{
        data(){
            return {
                myname: 'Xheldon.com'
            }
        },
        props: ['title']
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