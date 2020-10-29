<template>
    <div>
        <p>behavior-test</p>
        <div id="mountNode"></div>
    </div>
</template>

<script>

    import G6 from '@antv/g6';

    import axios from 'axios';

    const initData = {
        // 点集
        nodes: [
            {
                id: 'node1', // 节点的唯一标识
                x: 100, // 节点横坐标
                y: 200, // 节点纵坐标
                label: '起始点', // 节点文本
            },
            {
                id: 'node2',
                x: 300,
                y: 200,
                label: '目标点',
            },
        ],
        // 边集
        edges: [
            // 表示一条从 node1 节点连接到 node2 节点的边
            {
                source: 'node1', // 起始点 id
                target: 'node2', // 目标点 id
                label: '我是连线', // 边的文本
            },
        ],
    };

    export default {
        name: 'behavior-test',

        data() {
            return {
                graphData: null
            }
        },

        async mounted() {
            await this.getData();
            this.initGraph();
        },

        methods: {
            getData() {
                return axios.get('https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json')
                    .then(({data}) => {
                        console.log('origin ', data);
                        this.graphData = data;
                    })
                    .catch(err => err);
            },

            initGraph() {
                // const minimap = new G6.Minimap({
                //     size: [100, 100],
                //     className: 'minimap',
                //     type: 'delegate',
                // });

                // const imageMinimap = new G6.ImageMinimap({
                //     width: 200,
                //     graphImg: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*eD7nT6tmYgAAAAAAAAAAAABkARQnAQ'
                // });

                const graph = new G6.Graph({
                    container: 'mountNode', // 指定挂载容器
                    width: 800, // 图的宽度
                    height: 500, // 图的高度
                    fitView: true, // 将图适配到画布中
                    fitViewPadding: [20, 40, 50, 20], // 画布上四周的留白宽度
                    // plugins: [imageMinimap], // 将 minimap 实例配置到图上
                    modes: {
                        default: [
                            'drag-canvas', 'zoom-canvas', 'drag-node', // 允许拖拽画布、放缩画布、拖拽节点
                            {
                                type: 'tooltip', // 提示框
                                formatText(model) {
                                    // 提示框文本内容
                                    const text = 'label: ' + model.label + '<br/> class: ' + model.class;
                                    return text;
                                }
                            }
                        ],
                    },
                    defaultNode: {
                        size: 30, // 节点大小
                        // ...                 // 节点的其他配置
                        // 节点样式配置
                        style: {
                            fill: 'steelblue', // 节点填充色
                            stroke: '#666', // 节点描边色
                            lineWidth: 1, // 节点描边粗细
                        },
                        // 节点上的标签文本配置
                        labelCfg: {
                            // 节点上的标签文本样式配置
                            style: {
                                fill: '#0f0', // 节点标签文字颜色
                            },
                        },
                    },
                    defaultEdge: {
                        // ...                 // 边的其他配置
                        // 边样式配置
                        style: {
                            opacity: 0.6, // 边透明度
                            stroke: 'grey', // 边描边颜色
                        },
                        // 边上的标签文本配置
                        labelCfg: {
                            autoRotate: true, // 边上的标签文本根据边的方向旋转
                        },
                    },
                    // 节点不同状态下的样式集合
                    nodeStateStyles: {
                        // 鼠标 hover 上节点，即 hover 状态为 true 时的样式
                        hover: {
                            fill: 'black',
                        },
                        // 鼠标点击节点，即 click 状态为 true 时的样式
                        click: {
                            stroke: '#000',
                            lineWidth: 3,
                        },
                    },
                    // 边不同状态下的样式集合
                    edgeStateStyles: {
                        // 鼠标点击边，即 click 状态为 true 时的样式
                        click: {
                            stroke: 'steelblue',
                        },
                    }
                });

                const data = {
                    edges: this.graphData.edges.map(edge => {
                        if (!edge.style) {
                            edge.style = {};
                        }
                        edge.style.lineWidth = edge.weight;
                        edge.style.opacity = 0.6;
                        edge.style.stroke = 'red';
                        return edge;
                    }),
                    nodes: this.graphData.nodes.map(node => {
                        if (!node.style) {
                            node.style = {};
                        }
                        node.style.lineWidth = 1;
                        node.style.stroke = '#666';
                        node.style.fill = 'steelblue';
                        switch (node.class) { // 根据节点数据中的 class 属性配置图形
                            case 'c0': {
                                node.type = 'circle'; // class = 'c0' 时节点图形为 circle
                                break;
                            }
                            case 'c1': {
                                node.type = 'rect'; // class = 'c1' 时节点图形为 rect
                                node.size = [35, 20]; // class = 'c1' 时节点大小
                                break;
                            }
                            case 'c2': {
                                node.type = 'ellipse'; // class = 'c2' 时节点图形为 ellipse
                                node.size = [35, 20]; // class = 'c2' 时节点大小
                                break;
                            }
                        }
                        return node;
                    })
                };

                console.log('data ', data);

                // 鼠标进入节点
                graph.on('node:mouseenter', (e) => {
                    const nodeItem = e.item; // 获取鼠标进入的节点元素对象
                    graph.setItemState(nodeItem, 'hover', true); // 设置当前节点的 hover 状态为 true
                });

                // 鼠标离开节点
                graph.on('node:mouseleave', (e) => {
                    const nodeItem = e.item; // 获取鼠标离开的节点元素对象
                    graph.setItemState(nodeItem, 'hover', false); // 设置当前节点的 hover 状态为 false
                });

                // 点击节点
                graph.on('node:click', (e) => {
                    // 先将所有当前是 click 状态的节点置为非 click 状态
                    const clickNodes = graph.findAllByState('node', 'click');
                    clickNodes.forEach((cn) => {
                        graph.setItemState(cn, 'click', false);
                    });
                    const nodeItem = e.item; // 获取被点击的节点元素对象
                    graph.setItemState(nodeItem, 'click', true); // 设置当前节点的 click 状态为 true
                });


                // 点击边
                graph.on('edge:click', (e) => {
                    // 先将所有当前是 click 状态的边置为非 click 状态
                    const clickEdges = graph.findAllByState('edge', 'click');
                    clickEdges.forEach((ce) => {
                        graph.setItemState(ce, 'click', false);
                    });
                    const edgeItem = e.item; // 获取被点击的边元素对象
                    graph.setItemState(edgeItem, 'click', true); // 设置当前边的 click 状态为 true
                });

                graph.data(data); // 加载数据
                graph.render(); // 渲染
            }
        },
    };

</script>

<style lang='stylus' scoped>
    /* 提示框的样式 */
    /deep/ .g6-tooltip {
        border: 1px solid #e2e2e2;
        border-radius: 4px;
        font-size: 12px;
        color: #545454;
        background-color: rgba(255, 255, 255, 0.9);
        padding: 10px 8px;
        box-shadow: rgb(174, 174, 174) 0px 0px 10px;
    }
</style>
