<template>
    <div>
        <com-header :title="pageName"></com-header>
        <slot name="content"></slot>
        <com-footer :copyright="myName"></com-footer>
    </div>
</template>
<script>
    import comHeader from './header.vue'
    import comFooter from './footer.vue'
    export default{
        data(){
            return {
                myName: 'Xheldon.com',
                pageName: 'Vue SPA',
            }
        },
        components:{
            comHeader, comFooter
        }
    }
</script>
<style>
    body{
        background-color: #fff;
    }
    .content{
        margin-top: 40px;
    }
</style>