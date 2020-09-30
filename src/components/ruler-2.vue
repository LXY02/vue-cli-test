<template>
    <div>
        <div class="scroll-wrapper" ref="scrollrule">
            <div class="scroll-content">
                <div class="scroll-item" v-for="(item, index) in list" :key="index">{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script>

    import BScroll from '@better-scroll/core'

    export default {
        name: 'ruler-2',

        data() {
            return {
                list: Array(40).fill(0).map((res, index) => index)
            };
        },

        mounted() {
            this.scrollrule = new BScroll(this.$refs.scrollrule, {
                // 实时监听滚动的位置并返回
                probeType: 3,
                scrollX: true,
            });
        }
    };

</script>

<style lang='stylus' scoped>
    .scroll-wrapper {
        /*padding: 14px 50% 0;*/
        width: 100%;
        overflow: hidden;
        border: 3px solid #42b983;

        .scroll-content {
            display flex
            flex-wrap nowrap
            width 3200px; // 这块的width要动态设置
            height: 58px;
            padding: 14px 50% 0;
        }

        .scroll-item {
            margin: 0 10px;
            /*display inline-block*/
            /*width: 20px*/
            /*display flex*/
        }
    }
</style>
