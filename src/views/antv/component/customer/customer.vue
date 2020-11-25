<template>
    <div>
        <p>customer</p>
        <div id="container"></div>
    </div>
</template>

<script>

    import G6 from '@antv/g6';

    export default {
        name: 'customer',

        async mounted() {
            this.initGraph();
        },

        methods: {
            initGraph() {
                
            }
        },
    };

</script>

<style lang='stylus' scoped>

</style>
