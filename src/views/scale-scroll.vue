<template>
    <div class="core-container">
        <p>test</p>
        <div class="modal-content">
            <div class="scroll-wrapper" ref="scroll">
                <div class="scroll-content">
                    <img :src="imgSrc2" alt="">
                    <!--<div class="scroll-item" v-for="(item, index) in emojis" :key="index" @click="clickHandler(item)">{{item}}</div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from '@better-scroll/core'
    import Movable from '@better-scroll/movable'
    import Zoom from '@better-scroll/zoom'

    BScroll.use(Movable)
    BScroll.use(Zoom)

    export default {
        data () {
            return {
                imgSrc: 'http://7xshx1.com1.z0.glb.clouddn.com/insurance/qrcode/20200923143900297K57qcL.jpg',
                imgSrc2: 'https://sslstatic.xiaoyusan.com/xys/pdf-preview/pdf_330098_termsFile1_https___sslstatic.xiaoyusan.com_pdf_330098_termsFile1_信泰及时雨（典藏版）重大疾病保险条款.pdf/1.jpg',
                emojis: [
                    '😀 😁 😂 🤣 😃',
                    '😄 😅 😆 😉 😊',
                    '😫 😴 😌 😛 😜',
                    '👆🏻 😒 😓 😔 👇🏻'
                ]
            }
        },
        mounted() {
            this.init()
        },
        beforeDestroy() {
            this.bs.destroy()
        },
        methods: {
            init() {
                this.bs = new BScroll(this.$refs.scroll, {
                    bindToTarget: true,
                    scrollX: true,
                    scrollY: true,
                    freeScroll: true,
                    movable: true,
                    zoom: {
                        start: 1,
                        min: 0.5,
                        max: 3
                    }
                })
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

    .core-container
        height 100vh
        overflow hidden
        .modal-content
            position: fixed
            left 0
            bottom 0
            height: 400px
            border 1px solid red
        .scroll-wrapper
            height 340px
            overflow scroll
            -webkit-overflow-scrolling: touch;
            img
                width 100vw
            .scroll-content
                /*width 220px*/

</style>
