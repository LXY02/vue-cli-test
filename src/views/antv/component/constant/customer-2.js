export default G6 => {
    G6.registerNode('file-node', {
        draw: function draw(cfg, group) {
            const keyShape = group.addShape('rect', {
                attrs: {
                    x: 10,
                    y: -12,
                    fill: '#fff',
                    stroke: null,
                },
            });
            let isLeaf = false;
            if (cfg.collapsed) {
                group.addShape('marker', {
                    attrs: {
                        symbol: 'triangle',
                        x: 4,
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
                        x: 4,
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
                    text: cfg.id,
                    fill: '#666',
                    fontSize: 16,
                    textAlign: 'left',
                },
                name: 'text-shape',
            });
            const bbox = shape.getBBox();
            let backRectW = bbox.width;
            let backRectX = keyShape.attr('x');
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
}
