<template>
    <div v-if="inited">
        <!--<video-player  class="video-player vjs-custom-skin"-->
                       <!--ref="videoPlayer"-->
                       <!--:playsinline="true"-->
                       <!--:options="playerOptions"-->
        <!--&gt;</video-player>-->

        <div class="video-player vjs-custom-skin" :playsinline="true" v-video-player:myVideoPlayer="playerOptions"/>

    </div>
</template>

<script>

    import Vue from 'vue';

    export default {
        data() {
            return {
                inited: false,

                // videojs options
                playerOptions : {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                        src: "https://public.xiaoshuihua.com/static/insurance-upload/mayuri/dev/bcf032b9fa053aba73cdf25fd38b4247.mp4" //url地址
                    }],
                    // poster: "../../static/images/test.jpg", //你的封面地址
                    // width: document.documentElement.clientWidth, //播放器宽度
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true  //全屏按钮
                    }
                }
            }
        },
        // mounted() {
        //     // console.log('this is current player instance object', this.player)
        //     setTimeout(() => {
        //         console.log('dynamic change options', this.player)
        //
        //         // change src
        //         // this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';
        //
        //         // change item
        //         // this.$set(this.playerOptions.sources, 0, {
        //         //   type: "video/mp4",
        //         //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
        //         // })
        //
        //         // change array
        //         // this.playerOptions.sources = [{
        //         //   type: "video/mp4",
        //         //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
        //         // }]
        //         this.player.muted(false)
        //     }, 5000)
        // },

        async mounted() {
            const clientWidth = document.documentElement.clientWidth;

            this.playerOptions = {
                ...this.playerOptions,
                width: clientWidth
            };

            const VueVideoPlayer = await import('vue-video-player/dist/ssr');
            // const VueVideoPlayer2 = require('vue-video-player/dist/ssr');
            // console.log('VueVideoPlayer2 ', VueVideoPlayer2);
            console.log('VueVideoPlayer ', VueVideoPlayer);
            Vue.use(VueVideoPlayer);
            this.inited = true;
        }
    }
</script>

<style lang='stylus'>

    @import "~video.js/dist/video-js.css";
    @import "~vue-video-player/src/custom-theme.css";

    .video-js .vjs-icon-placeholder {
        width: 100%;
        height: 100%;
        display: block;
    }
</style>

