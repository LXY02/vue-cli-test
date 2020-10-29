<template>
    <div>
        <p>
            dynamic-loading-data
        </p>
        <div id="container"></div>
    </div>
</template>

<script>

    import G6 from '@antv/g6';

    import axios from 'axios';

    import _ from 'underscore';

    import {originData, originData2} from './constant/data';

    const graphData = {
        // isRoot: true,
        id: 'Root',
        nodeType: 'test',
        style: {
            fill: 'red',
        },
        children: [
            {
                id: 'SubTreeNode1',
                nodeType: 'test',
                raw: {},
                children: [
                    {
                        id: 'SubTreeNode1.1',
                        nodeType: 'test',
                    },
                    {
                        id: 'SubTreeNode1.2',
                        nodeType: 'test',
                        children: [
                            {
                                id: 'SubTreeNode1.2.1',
                                nodeType: 'test',
                            },
                            {
                                id: 'SubTreeNode1.2.2',
                                nodeType: 'test',
                            },
                            {
                                id: 'SubTreeNode1.2.3',
                                nodeType: 'special',
                            },
                        ],
                    },
                ],
            },
            {
                id: 'SubTreeNode2',
                nodeType: 'test',
                children: [
                    {
                        id: 'SubTreeNode2.1',
                        nodeType: 'test',
                    },
                ],
            },
            {
                id: 'SubTreeNode3',
                nodeType: 'test',
                children: [
                    {
                        id: 'SubTreeNode3.1',
                        nodeType: 'special',
                    },
                    {
                        id: 'SubTreeNode3.2',
                        nodeType: 'test',
                    },
                    {
                        id: 'SubTreeNode3.3',
                        nodeType: 'test',
                    },
                ],
            },
            {
                id: 'SubTreeNode4',
                nodeType: 'test',
            },
            {
                id: 'SubTreeNode5',
                nodeType: 'test',
            },
            {
                id: 'SubTreeNode6',
                nodeType: 'test',
            },
        ],
    };

    // const data = originData.body[0];
    const data = originData2.body[0];
    const res = [];

    // const test = (testData) => {
    //     const target = {
    //         id: testData.id,
    //         content: testData.content
    //     };
    //
    //     res.push(target);
    //
    //     if (testData.children) {
    //         for (let child of testData.children) {
    //             test(child);
    //         }
    //     }
    // };
    //
    // test(data);
    //
    // console.log('res ', res);
    // console.log('uniq ', _.uniq(res, (item) => item.id));

    export default {
        name: 'dynamic-loading-data',

        data() {
            return {
                // graphData: graphData
                graphData: data
            }
        },

        async mounted() {
            // await this.getData();
            this.initGraph();
        },

        methods: {
            getData() {

            },

            initGraph() {
                const width = document.getElementById('container').scrollWidth;
                const height = document.getElementById('container').scrollHeight || document.documentElement.clientHeight - 200;

                const minimap = new G6.Minimap({
                    size: [150, 100]
                });

                const toolbar = new G6.ToolBar();

                const graph = new G6.TreeGraph({
                    container: 'container',
                    width,
                    height,
                    modes: {
                        default: ['collapse-expand', 'drag-canvas', 'zoom-canvas'],
                    },
                    // fitView: true,
                    fitView: true,
                    layout: {
                        type: 'compactBox',
                        direction: 'LR',
                        fixedRoot: true,
                        defalutPosition: [0, 800],
                        getId: function getIsd(d) {
                            // console.log('d ', d);
                            return d.id;
                        },
                        getHeight: function getHeight() {
                            return 16;
                        },
                        getWidth: function getWidth() {
                            return 16;
                        },
                        getVGap: function getVGap() {
                            return 20;
                        },
                        getHGap: function getHGap() {
                            return 200;
                        },
                    },
                    plugins: [minimap, toolbar]
                });

                graph.node(function (node) {
                    // console.log('node ', node);
                    return {
                        size: 16,
                        anchorPoints: [
                            [0, 0.5],
                            [1, 0.5],
                        ],
                        style: {
                            fill: '#DEE9FF',
                            stroke: '#5B8FF9',
                        },
                        label: node.id,
                        labelCfg: {
                            position: node.children && node.children.length > 0 ? 'left' : 'right',
                        },
                    };
                });
                let i = 0;

                graph.edge(function () {
                    i++;
                    return {
                        type: 'cubic-horizontal',
                        color: '#A3B1BF',
                        label: i,
                    };
                });

                graph.data(this.graphData);
                graph.render();

                let count = 0;

                graph.on('node:click', function (evt) { // 动态加载
                    const item = evt.item;

                    const nodeId = item.get('id');
                    const model = item.getModel();

                    console.log('model ', model.nodeType, model);

                    if (model.nodeType === 'special') return;

                    const children = model.children;
                    if (!children || children.length === 0) {
                        const childData = [
                            {
                                id: 'child-data-' + count,
                                type: 'rect',
                                children: [
                                    {
                                        id: 'x-' + count,
                                    },
                                    {
                                        id: 'y-' + count,
                                    },
                                ],
                            },
                            {
                                id: 'child-data1-' + count,
                                children: [
                                    {
                                        id: 'x1-' + count,
                                    },
                                    {
                                        id: 'y1-' + count,
                                    },
                                ],
                            },
                        ];

                        const parentData = graph.findDataById(nodeId);
                        if (!parentData.children) {
                            parentData.children = [];
                        }
                        // 如果childData是一个数组，则直接赋值给parentData.children
                        // 如果是一个对象，则使用parentData.children.push(obj)
                        parentData.children = childData;
                        graph.changeData();
                        count++;
                    }
                });
            }
        },
    };

</script>

<style lang='stylus' scoped>

</style>
