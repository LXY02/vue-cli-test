<template>
    <div>
        <p>
            file-tree
        </p>
        <child/>

        <div id="container"></div>
    </div>
</template>

<script>

    import G6 from '@antv/g6';

    import {data} from './data';

    import mixinTest from './mixin';

    import child from './child';

    G6.registerEdge(
        'step-line',
        {
            getControlPoints: function getControlPoints(cfg) {
                const startPoint = cfg.startPoint;
                const endPoint = cfg.endPoint;
                return [
                    startPoint,
                    {
                        x: startPoint.x,
                        y: endPoint.y,
                    },
                    endPoint,
                ];
            },
        },
        'polyline',
    );

    G6.registerNode('file-node', {
        draw: function draw(cfg, group) {
            const keyShape = group.addShape('rect', {
                attrs: {
                    x: 0,
                    y: -12,
                    fill: '#bffff7',
                    stroke: null,
                },
            });

            // let isLeaf = false;
            //
            // if (cfg.collapsed) {
            //     group.addShape('marker', {
            //         attrs: {
            //             symbol: 'circle',
            //             x: 0,
            //             y: -2,
            //             r: 4,
            //             fill: '#666',
            //         },
            //         name: 'marker-shape',
            //     });
            // } else if (cfg.children && cfg.children.length > 0) {
            //     group.addShape('marker', {
            //         attrs: {
            //             symbol: 'triangle-down',
            //             x: 0,
            //             y: -2,
            //             r: 4,
            //             fill: '#666',
            //         },
            //         name: 'marker-shape',
            //     });
            // } else {
            //     isLeaf = true;
            // }

            const shape = group.addShape('text', {
                attrs: {
                    x: 15,
                    y: 4,
                    text: cfg.name,
                    fill: '#ff4532',
                    fontSize: 16,
                    textAlign: 'left'
                },
                name: 'text-shape',
            });

            const bbox = shape.getBBox();
            let backRectW = bbox.width;
            let backRectX = keyShape.attr('x');

            group.addShape('text', {
                attrs: {
                    x: bbox.maxX + 45,
                    y: 4,
                    text: '加载子数据',
                    fill: '#ff4532',
                    fontSize: 14,
                    textAlign: 'left'
                },
                name: 'text-shape',
            });

            group.addShape('circle', {
                attrs: {
                    x: bbox.maxX + 10,
                    y: (bbox.minY + bbox.maxY) / 2,
                    r: 5,
                    fill: '#ff0000',
                    stroke: '#000',
                    cursor: 'pointer',
                    label: '操作'
                },
                name: 'handle-1',
                draggable: true,
            });

            group.addShape('circle', {
                attrs: {
                    x: bbox.maxX + 30,
                    y: (bbox.minY + bbox.maxY) / 2,
                    r: 5,
                    stroke: '#000',
                    fill: '#abcdef'
                },
                name: 'handle-2',
                draggable: true,
            });

            // if (!isLeaf) {
            //     backRectW += 8;
            //     backRectX -= 15;
            // }
            keyShape.attr({
                width: backRectW,
                height: bbox.height + 4,
                x: backRectX,
            });
            return keyShape;
        },
    });

    export default {
        name: 'file-tree',

        mixins: [mixinTest],

        components: {child},

        async mounted() {
            console.log('graph');
            this.initGraph();
        },

        methods: {
            initGraph() {
                const width = document.getElementById('container').scrollWidth;
                const height = document.getElementById('container').scrollHeight || document.documentElement.clientHeight - 200;

                const tooltip = new G6.Tooltip({
                    offsetX: 10,
                    offsetY: 20,
                    getContent(e) {
                        const outDiv = document.createElement('div');
                        let label = e.target.get('name') || e.item.getModel().name;

                        outDiv.style.width = '180px';
                        outDiv.innerHTML = `
                             <ul>
                                <li>Label: ${label}</li>
                            </ul>`;
                        return outDiv;
                    },
                    itemTypes: ['node']
                });

                const menu = new G6.Menu();

                const toolbar = new G6.ToolBar();

                const graph = new G6.TreeGraph({
                    container: 'container',
                    width,
                    height,
                    linkCenter: true,
                    modes: {
                        default: [
                            {
                                type: 'collapse-expand',
                                animate: false,
                                onChange: function onChange(item, collapsed) {
                                    const data = item.get('model');
                                    data.collapsed = collapsed;
                                    return true;
                                },
                            },
                            'drag-canvas',
                            'zoom-canvas',
                        ],
                    },
                    defaultEdge: {
                        style: {
                            stroke: '#A3B1BF',
                        },
                    },
                    layout: {
                        type: 'indented',
                        isHorizontal: true,
                        direction: 'LR',
                        indent: 30,
                        getHeight: function getHeight() {
                            return 16;
                        },
                        getWidth: function getWidth() {
                            return 16;
                        },
                    },
                    plugins: [tooltip, toolbar]
                });

                graph.node((node) => {
                    return {
                        type: 'file-node',
                        label: node.name,
                    };
                });
                graph.edge(() => {
                    return {
                        type: 'step-line',
                    };
                });

                graph.data(data);
                graph.render();
                graph.fitView();

                graph.on('node:click', event => {
                    // const {item} = event;'
                    // const model = item.getModel();
                    //
                    // console.log('node ', event, model);
                    console.log('name ', event.target.get('name'));
                    if (event.target.get('name') === 'handle-1') {
                        console.log('1 ', event);
                        // event.item.getModel().collapsed = !event.item.getModel().collapsed;
                        // graph.setItemState(event.item, 'collapsed', event.item.getModel().collapsed);
                        // graph.layout();
                    }
                });

                // graph.on('canvas:click', event => {
                //
                //     console.log('canvas ', event);
                // });
            }
        },
    };

</script>

<style lang='stylus' scoped>

</style>
