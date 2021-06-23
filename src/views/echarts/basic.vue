<!-- @author xinyiliang -->
<!-- @email xinyiliang@yangqianguan.com -->
<!-- @date 2021/6/23 6:45 PM -->
<!-- @desc basic.vue -->

<template>
    <div>
        <p>echarts</p>
        <div v-if="chartOption" ref="main" style="width: 100%; height: 400px;" />
    </div>
</template>

<script>

    // 备注下，5.0以上的echarts版本开始可以支持按需引入了，详见下面这个链接
    // https://echarts.apache.org/zh/tutorial.html#%E5%9C%A8%E6%89%93%E5%8C%85%E7%8E%AF%E5%A2%83%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts

    // import * as echarts from 'echarts'; // 这种方式是全部引入

    // 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
    import * as echarts from 'echarts/core';

    // 引入柱状图图表，图表后缀都为 Chart
    import {
        BarChart
    } from 'echarts/charts';

    // 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
    import {
        TitleComponent,
        TooltipComponent,
        GridComponent,
        LegendComponent
    } from 'echarts/components';

    // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
    import {
        CanvasRenderer
    } from 'echarts/renderers';

    // 注册必须的组件
    echarts.use(
        [TitleComponent, TooltipComponent, GridComponent, LegendComponent, BarChart, CanvasRenderer]
    );

    export default {
        name: 'basic',

        data() {
            return {
                chart: null,

                chartOption: {
                    title: {
                        text: 'ECharts 入门示例--'
                    },
                    tooltip: {},
                    legend: {
                        data:['销量']
                    },
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                }
            }
        },

        mounted() {
            if (this.chart) echarts.dispose(this.chart);
            this.chart = echarts.init(this.$refs.main);
            this.chart.setOption(this.chartOption);
        }
    };

</script>
