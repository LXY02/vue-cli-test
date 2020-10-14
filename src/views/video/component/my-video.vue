<template>
    <div v-if="inited">
        <div class="video" :playsinline="true" v-video-player:myVideoPlayer="playerOptions"/>
    </div>
</template>

<script>

    import Vue from 'vue';

    export default {
        name: 'MyVideo',

        props: {
            src: {
                type: String
            },

            width: {
                type: Number
            }
        },

        data() {
            return {
                inited: false,
                playerOptions: {
                    // sources: [{
                    //     type: "video/mp4",
                    //     src: this.src
                    // }]
                    sources: [{
                        type: "video/mp4",
                        src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                    }]
                }
            };
        },

        async mounted() {
            const clientWidth = document.documentElement.clientWidth;

            this.playerOptions = {
                ...this.playerOptions,
                width: this.width || clientWidth
            };

            const VueVideoPlayer = await import('vue-video-player/dist/ssr');
            // const VueVideoPlayer2 = require('vue-video-player/dist/ssr');
            // console.log('VueVideoPlayer2 ', VueVideoPlayer2);
            console.log('VueVideoPlayer ', VueVideoPlayer);
            Vue.use(VueVideoPlayer);
            this.inited = true;
        }
    };

</script>

<style lang='stylus'>
    @import '~vue-video-player/src/custom-theme.css';

    /deep/ video {
        width: 100%;
    }
</style>
