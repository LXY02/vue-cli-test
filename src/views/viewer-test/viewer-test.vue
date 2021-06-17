<!-- @author xinyiliang -->
<!-- @email xinyiliang@yangqianguan.com -->
<!-- @date 2021/4/13 11:28 AM -->
<!-- @desc viewer-test.vue -->

<template>
    <div>
        <!--<img :src="images[1]" @click="showImgViewer"/>-->


        <div ref="test">
            <div>test-----</div>
            <div>test</div>
            <child :images="images.slice(0, 3)"/>
            <div>lalalal</div>
            <div>lalalal</div>
            <div>lalalal</div>
            <child :images="images.slice(3)"/>
        </div>
    </div>
</template>

<script>

    import Viewer from 'viewerjs';

    import Child from './child';

    export default {
        name: 'viewer-test',

        components: {
            Child
        },

        data() {
            return {
                $viewer: null,
                // options: {navbar: false, title: false, toolbar: false},
                images: [
                    'https://public-test.yangqianguan.com/ybank/test-bzb/1617783157141核心价值观icon@2x.png',
                    'https://public-test.yangqianguan.com/ybank/test-bzb/1617783181801行业定位icon@2x.png',
                    'https://public-test.yangqianguan.com/ybank/test-bzb/1617783206978企业愿景icon@2x.png',
                    'https://public-test.yangqianguan.com/ybank/test-bzb/1617783228330企业使命icon@2x.png'
                ]
            }
        },

        mounted() {
            const $viewer = new Viewer(this.$refs.test);
        },

        methods: {

        },
    };

</script>

<style lang='stylus' scoped>
    @import '~viewerjs/dist/viewer.css'

</style>
