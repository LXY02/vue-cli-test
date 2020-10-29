<template>
    <div>
        <p>g6 test</p>
        <div id="container"></div>
    </div>
</template>

<script>

    import G6 from '@antv/g6';

    import axios from 'axios';

    export default {
        name: 'antv-g6',

        data() {
            return {
                graphData: null
            }
        },

        mounted() {
            this.init();
        },

        methods: {
            async init() {
                await this.getData();
                this.initGraph();
            },

            getData() {
                // fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
                //     .then((res) => {
                //         console.log('res--- ', res);
                //         return res.json();
                //     })
                //     .then(data => {
                //         console.log('data--- ', data);
                //         // this.graphData = data;
                //     })
                //     .catch(err => err);

                return axios.get('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
                    .then(({data}) => {
                        console.log('data ', data);
                        this.graphData = data;
                    })
                    .catch(err => err);
            },

            initGraph() {
                const width = document.getElementById('container').scrollWidth;
                const height = document.getElementById('container').scrollHeight || 500;

                const graph = new G6.TreeGraph({
                    container: 'container',
                    width,
                    height,
                    modes: { // 图上行为模式的集合
                        default: [
                            {
                                type: 'collapse-expand',
                                onChange: function onChange(item, collapsed) {
                                    const data = item.get('model').data;
                                    data.collapsed = collapsed;
                                    return true;
                                },
                            },
                            'drag-canvas',
                            'zoom-canvas',
                        ],
                    },
                    defaultNode: { // 节点默认的属性
                        size: 26,
                        anchorPoints: [
                            [0, 0.5],
                            [1, 0.5],
                        ],
                        style: {
                            fill: '#C6E5FF',
                            stroke: '#5B8FF9',
                        },
                    },
                    defaultEdge: {
                        type: 'cubic-horizontal',
                        style: {
                            stroke: '#A3B1BF',
                        },
                    },
                    layout: {
                        type: 'compactBox',
                        direction: 'LR',
                        getId: function getId(d) {
                            return d.id;
                        },
                        getHeight: function getHeight() {
                            return 16;
                        },
                        getWidth: function getWidth() {
                            return 16;
                        },
                        getVGap: function getVGap() {
                            return 10;
                        },
                        getHGap: function getHGap() {
                            return 100;
                        },
                    },
                });

                graph.node(function (node) {
                    return {
                        label: node.id,
                        labelCfg: {
                            offset: 10,
                            position: node.children && node.children.length > 0 ? 'left' : 'right',
                        },
                    };
                });

                graph.data(this.graphData);
                graph.render();
                graph.fitView();
            }
        },
    };

</script>

<style lang='stylus' scoped>

</style>
