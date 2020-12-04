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

    import './constant/customer';

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

    const getTreeNode = (root, targetKey, targetValue) => {
        const isInValid = value => [null, undefined].includes(value);

        if (isInValid(root) || isInValid(targetValue)) return;

        if (root[targetKey] === targetValue) return root;

        if (root.children && root.children.length) {
            const childrenLength = root.children.length;

            for (let index = 0; index < childrenLength; index += 1) {
                const targetNode = getTreeNode(root.children[index], targetKey, targetValue);

                if (targetNode) return targetNode;
            }
        }
    };

    export default {
        name: 'dynamic-loading-data',

        data() {
            return {
                // graphData: graphData
                currMode: 'default',
                graph: null,
                graphData: data
            }
        },

        async mounted() {
            // await this.getData();
            const {default: customerNode} = await import('./constant/customer-2');
            customerNode(G6);
            this.initGraph();
        },

        methods: {
            initGraph() {
                const width = document.getElementById('container').scrollWidth;
                const height = document.getElementById('container').scrollHeight || document.documentElement.clientHeight - 200;

                var graph = new G6.TreeGraph({
                    container: 'container',
                    width,
                    height,
                    pixelRatio: 2,
                    renderer: 'svg',
                    modes: {
                        default: ['collapse-expand', 'drag-canvas']
                    },
                    fitView: true,
                    layout: {
                        type: 'compactBox',
                        direction: 'LR',
                        defalutPosition: [],
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
                            return 50;
                        },
                        getHGap: function getHGap() {
                            return 100;
                        }
                    }
                });
                graph.node(function (node) {
                    return {
                        // size: 16,
                        // anchorPoints: [[0, 0.5], [1, 0.5]],
                        // style: {
                        //     fill: '#40a9ff',
                        //     stroke: '#096dd9'
                        // },
                        // // type: 'crect',
                        // label: node.id,
                        // labelCfg: {
                        //     // position: node.children && node.children.length > 0 ? 'left' : 'right'
                        //     position: 'bottom'
                        // }
                        // anchorPoints:[[0, 0.5, 1, 0.5]]
                        type: 'crect'
                    };
                });
                var i = 0;
                graph.edge(function () {
                    i++;
                    return {
                        shape: 'cubic-horizontal',
                        color: '#A3B1BF',
                        // label: i
                    };
                });
                var data = {
                    isRoot: true,
                    id: 'Root',
                    // style: {
                    //     fill: 'red'
                    // },
                    children: [{
                        id: 'SubTreeNode1',
                        raw: {},
                        children: [{
                            id: 'SubTreeNode1.1'
                        }, {
                            id: 'SubTreeNode1.2',
                            children: [{
                                id: 'SubTreeNode1.2.1'
                            }, {
                                id: 'SubTreeNode1.2.2'
                            }, {
                                id: 'SubTreeNode1.2.3'
                            }]
                        }]
                    }, {
                        id: 'SubTreeNode2',
                        children: [{
                            id: 'SubTreeNode2.1'
                        }]
                    }, {
                        id: 'SubTreeNode3',
                        children: [{
                            id: 'SubTreeNode3.1'
                        }, {
                            id: 'SubTreeNode3.2'
                        }, {
                            id: 'SubTreeNode3.3'
                        }]
                    }, {
                        id: 'SubTreeNode4'
                    }, {
                        id: 'SubTreeNode5'
                    }, {
                        id: 'SubTreeNode6'
                    }]
                };
                graph.data(data);
                graph.render();

                var count = 0;

                graph.on('node:click', function (evt) {
                    var item = evt.item;

                    var nodeId = item.get('id');
                    var model = item.getModel();
                    var children = model.children;
                    if (!children || children.length === 0) {
                        var childData = [{
                            id: 'child-data-' + count,
                            // shape: 'rect',
                            anchorPoints: [
                                [0, 0.5], // 左侧中间
                                [1, 0.5]  // 右侧中间
                            ],
                            children: [{
                                id: 'x-' + count
                            }, {
                                id: 'y-' + count
                            }]
                        }, {
                            id: 'child-data1-' + count,
                            anchorPoints: [
                                [0, 0.5], // 左侧中间
                                [1, 0.5]  // 右侧中间
                            ],
                            children: [{
                                id: 'x1-' + count
                            }, {
                                id: 'y1-' + count
                            }]
                        }];

                        var parentData = graph.findDataById(nodeId);
                        if (!parentData.children) {
                            parentData.children = [];
                        }
                        // 如果childData是一个数组，则直接赋值给parentData.children
                        // 如果是一个对象，则使用parentData.children.push(obj)
                        parentData.children = childData;
                        graph.changeData();
                        graph.refreshPositions();

                        count++;
                    }
                })
            }

        }
    };

</script>

<style lang='stylus' scoped>

</style>
