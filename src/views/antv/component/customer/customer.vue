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
                const width = document.getElementById('container').scrollWidth;
                const height = document.getElementById('container').scrollHeight || document.documentElement.clientHeight - 200;

                const graph = new G6.TreeGraph({
                    container: 'container',
                    width,
                    height,

                });
            }
        },
    };

</script>

<style lang='stylus' scoped>

</style>
