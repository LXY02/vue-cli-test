<template>
    <div>
        <p>
            video
        </p>

        <img :src="videoSrc" alt="">

        <!--<my-video :src="videoSrc"/>-->
        <p>lalalalal</p>
        <!--<origin-video/>-->
        <!--<video-capture :src="videoSrc"/>-->
    </div>
</template>

<script>

    // import MyVideo from './component/my-video';
    // import OriginVideo from './component/origin-video';
    // import VideoCapture from './component/video-capture';

    export default {
        name: 'VideoTest',

        components: {
            // MyVideo,
            // OriginVideo,
            // VideoCapture
        },

        data() {
            return {
                videoSrc: 'https://public.xiaoshuihua.com/static/insurance-upload/mayuri/dev/bcf032b9fa053aba73cdf25fd38b4247.mp4'
            }
        }
    };

</script>

<style lang='stylus' scoped>

</style>
