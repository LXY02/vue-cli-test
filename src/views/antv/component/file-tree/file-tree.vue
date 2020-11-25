<template>
    <div>
        <p>
            file-tree
        </p>

        <div id="container"></div>
    </div>
</template>

<script>

    import G6 from '@antv/g6';

    import {data} from './data';

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

            let isLeaf = false;

            if (cfg.collapsed) {
                group.addShape('marker', {
                    attrs: {
                        symbol: 'circle',
                        x: 0,
                        y: -2,
                        r: 4,
                        fill: '#666',
                    },
                    name: 'marker-shape',
                });
            } else if (cfg.children && cfg.children.length > 0) {
                group.addShape('marker', {
                    attrs: {
                        symbol: 'triangle-down',
                        x: 0,
                        y: -2,
                        r: 4,
                        fill: '#666',
                    },
                    name: 'marker-shape',
                });
            } else {
                isLeaf = true;
            }

            const shape = group.addShape('text', {
                attrs: {
                    x: 15,
                    y: 4,
                    text: cfg.name,
                    fill: '#ff4532',
                    fontSize: 16,
                    textAlign: 'left',
                },
                name: 'text-shape',
            });

            const bbox = shape.getBBox();
            let backRectW = bbox.width;
            let backRectX = keyShape.attr('x');

            group.addShape('circle', {
                attrs: {
                    x: bbox.maxX + 10,
                    y: (bbox.minY + bbox.maxY) / 2,
                    r: 5,
                    stroke: '#000',
                },
                name: 'circle-shape',
                draggable: true,
            });

            group.addShape('circle', {
                attrs: {
                    x: bbox.maxX + 30,
                    y: (bbox.minY + bbox.maxY) / 2,
                    r: 5,
                    stroke: '#000',
                },
                name: 'circle-shape',
                draggable: true,
            });

            if (!isLeaf) {
                backRectW += 8;
                backRectX -= 15;
            }
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
                    const {item} = event;
                    const model = item.getModel();

                    console.log('---- ', event, model);
                });
            }
        },
    };

</script>

<style lang='stylus' scoped>

</style>
