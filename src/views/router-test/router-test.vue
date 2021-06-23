<!-- @author xinyiliang -->
<!-- @email xinyiliang@yangqianguan.com -->
<!-- @date 2021/6/17 6:44 PM -->
<!-- @desc router-test.vue -->

<template>
    <div>
        <button @click="toB">A组件</button>
        <button @click="toA">B组件</button>
        <router-view />
    </div>
</template>

<script>

    export default {
        name: 'router-test',

        beforeRouteUpdate(to, from, next) {
            // 子路由发生变化的时候
            console.log('beforeRouteUpdate ', to, from, next);
            next();
        },

        beforeRouteEnter(to, from, next) {
            console.log('beforeRouteEnter--- ', to, from, next);
            next(vm => {
                console.log('beforeRouteEnter next callback');
            });
        },

        methods: {
            toA() {
                this.$router.push({name: 'child a'})
            },

            toB() {
                this.$router.push({name: 'child b'})
            }
        },
    };

</script>
