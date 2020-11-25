<template>
    <div>
        <p>
            dynamic-loading-data
        </p>

        <select id="selector" @change="selectorChange">
            <option value="default">Default Mode</option>
            <option value="addNode">Add Node (By clicking canvas)</option>
            <option value="addEdge">Add Edge (By clicking two end nodes)</option>
            <option value="removeNode">remove Edge (By clicking two end nodes)</option>
        </select>

        <div id="container">
        </div>
    </div>
</template>

<script>

    import G6 from '@antv/g6';

    import axios from 'axios';

    import _ from 'underscore';

    let addedCount = 0;

    G6.registerBehavior('click-add-node', {
        // Set the events and the corresponding responsing function for this behavior
        getEvents() {
            // The event is canvas:click, the responsing function is onClick
            return {
                'canvas:click': 'onClick',
            };
        },
        // Click event
        onClick(ev) {
            const self = this;
            const graph = self.graph;

            console.log('graph ', graph);
            // Add a new node
            graph.addItem('node', {
                x: ev.canvasX,
                y: ev.canvasY,
                id: `node-${addedCount}`, // Generate the unique id
            });
            addedCount++;
        },
    });

    G6.registerBehavior('click-add-edge', {
        // Set the events and the corresponding responsing function for this behavior
        getEvents() {
            return {
                'node:click': 'onClick', // The event is canvas:click, the responsing function is onClick
                mousemove: 'onMousemove', // The event is mousemove, the responsing function is onMousemove
                'edge:click': 'onEdgeClick', // The event is edge:click, the responsing function is onEdgeClick
            };
        },
        // The responsing function for node:click defined in getEvents
        onClick(ev) {
            const self = this;
            const node = ev.item;
            const graph = self.graph;
            // The position where the mouse clicks
            const point = { x: ev.x, y: ev.y };
            const model = node.getModel();
            if (self.addingEdge && self.edge) {
                graph.updateItem(self.edge, {
                    target: model.id,
                });

                self.edge = null;
                self.addingEdge = false;
            } else {
                // Add anew edge, the end node is the current node user clicks
                self.edge = graph.addItem('edge', {
                    source: model.id,
                    target: model.id,
                });
                self.addingEdge = true;
            }
        },
        // The responsing function for mousemove defined in getEvents
        onMousemove(ev) {
            const self = this;
            // The current position the mouse clicks
            const point = { x: ev.x, y: ev.y };
            if (self.addingEdge && self.edge) {
                // Update the end node to the current node the mouse clicks
                self.graph.updateItem(self.edge, {
                    target: point,
                });
            }
        },
        // The responsing function for edge:click defined in getEvents
        onEdgeClick(ev) {
            const self = this;
            const currentEdge = ev.item;
            if (self.addingEdge && self.edge === currentEdge) {
                self.graph.removeItem(self.edge);
                self.edge = null;
                self.addingEdge = false;
            }
        },
    });

    const data = {
        nodes: [
            {
                id: 'node1',
                x: 100,
                y: 200,
            },
            {
                id: 'node2',
                x: 300,
                y: 200,
            },
            {
                id: 'node3',
                x: 300,
                y: 300,
            },
        ],
        edges: [
            {
                id: 'edge1',
                target: 'node2',
                source: 'node1',
            },
        ],
    };

    export default {
        name: 'behavior-test',

        data() {
            return {
                graph: null
            }
        },

        async mounted() {
            // await this.getData();
            this.initGraph();
        },

        methods: {
            initGraph() {
                const width = document.getElementById('container').scrollWidth;
                const height = document.getElementById('container').scrollHeight || 500;
                this.graph = new G6.Graph({
                    container: 'container',
                    width,
                    height,
                    // The sets of behavior modes
                    modes: {
                        // Defualt mode
                        default: ['drag-node', 'click-select'],
                        // Adding node mode
                        addNode: ['click-add-node', 'click-select'],
                        // Adding edge mode
                        addEdge: ['click-add-edge', 'click-select'],
                    },
                    // The node styles in different states
                    nodeStateStyles: {
                        // The node styles in selected state
                        selected: {
                            stroke: '#666',
                            lineWidth: 2,
                            fill: 'steelblue',
                        },
                    },
                });
                this.graph.data(data);
                this.graph.render();

// Listen to the selector, change the mode when the selector is changed
//                 selector.addEventListener('change', (e) => {
//                     const value = e.target.value;
//                     // change the behavior mode
//                     graph.setMode(value);
//                 });
            },

            selectorChange(e) {
                const value = e.target.value;
                console.log('vvv ', value);
//                     // change the behavior mode
                    this.graph.setMode(value);
            }
        },
    };

</script>

<style lang='stylus' scoped>

</style>
