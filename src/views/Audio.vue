<template>
    <div>
        audio-1
        <audio src="https://public-test.yangqianguan.com/static/yqg-upload/mayuri/dev/9ed38d765ffb97f5c0a7c8fdcfbddd02.m4a" controls controlslist="nodownload"></audio>
        <audio src="https://public.yangqianguan.com/static/yqg-upload/mayuri/test/26915c7ea32e30e00df749299ca7f05c.mp3" controls controlslist="nodownload"></audio>

        <aplayer class="audio"
                 :music="{
                 preload: true,
                 title: 'secret base~君がくれたもの~',
                 artist: 'Silent Siren',
                 src: 'https://public.yangqianguan.com/static/yqg-upload/mayuri/test/26915c7ea32e30e00df749299ca7f05c.mp3'
  }"
        />
    </div>
</template>

<script>
    import Aplayer from 'vue-aplayer'

    export default {
        name: "Audio",

        components: {
            Aplayer
        },

        data() {
            return {
                audioSrc: 'https://public.yangqianguan.com/static/yqg-upload/mayuri/test/26915c7ea32e30e00df749299ca7f05c.mp3',
                src2: 'https://public-test.yangqianguan.com/static/yqg-upload/mayuri/dev/9ed38d765ffb97f5c0a7c8fdcfbddd02.m4a'
            };
        }
    }
</script>

<style lang="stylus" rel="stylesheet/scss" scoped>

    .audio {
        /*box-shadow: none;*/
    }

</style>
