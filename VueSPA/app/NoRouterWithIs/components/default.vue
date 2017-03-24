<template>
    <transition name="go">
        <div>
            <com-header :title="pageName"></com-header>
            <slot name="content"></slot>
            <com-footer :copyright="myName"></com-footer>
        </div>
    </transition>
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
    #body{
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        transition: all 500ms ease;
    }
    .go-enter-active{
        opacity: 1;
        transform: translateX(0px);
    }
    .go-leave-active{
        opacity: 0;
        transform: translateX(100%);
    }
    .go-leave{
        opacity: 1;
        transform: translateX(0);
    }
    .go-enter{
        opacity: 0;
        transform: translateX(-100%);
    }
</style>