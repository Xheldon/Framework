<template>
    <a
        v-bind:href="href"
        v-bind:class="{ active: isActive }"
        v-on:click="go"
    >
        <slot></slot>
    </a>
</template>

<script>
    import routes from '../routes'
    export default {
        props: {
            href: {
                type: String,
                required: true
            }
        },
        computed: {
            isActive () {
                return this.href === this.$root.currentRoute
            }
        },
        methods: {
            go (event) {
                event.preventDefault();
                this.$root.currentRoute = this.href;
                window.history.pushState(
                    null,
                    routes[this.href],//pushState 中第二个参数一般会被忽略
                    this.href// 无刷新新增一条历史记录并修改当前地址栏地址
                )
            }
        }
    }
</script>

<style scoped>
    .active {
        color: cornflowerblue;
    }
</style>