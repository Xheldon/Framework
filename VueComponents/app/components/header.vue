<template>
    <div id="header">
        {{channel}}
    </div>
</template>
<style>
    #header{
        width: 100%;
        height: 80px;
        background-color: #f04848;
    }
</style>
<script>
    export default {
        data(){
            return {

            }
        },
        props: {
            channel: String,
            require: true
        },
        name: 'com-header'
    }
</script>