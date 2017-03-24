<template>
    <div class="button">
        <button type="button">
            <slot></slot>
        </button>
    </div>
</template>
<style>
    .button{
        width: 50%;
        height: 40px;
        display: inline-block;
        vertical-align: middle;
    }
</style>
<script>
    export default {
        data(){
            return {

            }
        },
        props: ['type'],
        name: 'com-button'
    }
</script>