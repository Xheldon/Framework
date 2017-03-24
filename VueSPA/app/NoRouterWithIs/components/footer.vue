<template>
    <footer>
        这里是 footer @copyright{{copyright}}
    </footer>
</template>
<script>
    export default{
        data(){
            return {
                myname: 'Xheldon.com'
            }
        },
        props: ['copyright']
    }
</script>
<style scoped lang="scss">
    footer{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        position: fixed;
        bottom: 0;
        background-color: #333;
        color: #fff;
    }
</style>