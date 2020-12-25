<template>
    <div>
        <p @click="clickShow">--- {{ showDrawer }}</p>

        <drawer v-model="showDrawer" >
            <p>test</p>
        </drawer>
    </div>
</template>

<script>

    import Drawer from './component/drawer';

    export default {
        name: 'DrawerTest',

        components: {
            Drawer
        },

        data() {
            return {
                showDrawer: false
            }
        },

        methods: {
            clickShow() {
                this.showDrawer = true;
            }
        },
    };

</script>

<style lang='stylus' scoped>

</style>
