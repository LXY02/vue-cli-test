<template>
    <div>
        test
        <div class="carousel-wrapper">
            <div class="carousel-content" ref="carouselContent">
                <p
                    v-for="(carousel, index) in list"
                    :key="index"
                    class="carousel"
                    ref="carousel"
                >
                    {{ carousel.index }}-{{ carousel.desc }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'NewsCarousel',
        data() {
            return {
                interval: null,
                list: Array(6).fill(null).map((val, index) => ({index, desc: '这个一个测试'}))
            };
        },

        mounted() {
            const targetCarousel = this.$refs.carousel[0];
            targetCarousel.style.opacity = .45;
            this.interval = setInterval(this.scroll, 2500);
        },

        beforeDestroy() {
            if (this.interval) {
                clearInterval(this.interval);
            }
        },

        methods: {
            scroll() {
                const carouselContent = this.$refs.carouselContent;
                carouselContent.style.transition = 'all 1250ms linear';
                carouselContent.style.marginTop = '-44px';
                const targetCarousel = this.$refs.carousel[0];
                targetCarousel.style.transition = 'all 500ms ease-in';
                targetCarousel.style.opacity = 0;
                const nextCarousel = this.$refs.carousel[1];
                nextCarousel.style.transition = 'all 500ms ease-in';
                nextCarousel.style.opacity = .45;
                setTimeout(() => {
                    carouselContent.style.transition = 'none';
                    carouselContent.style.marginTop = '0';
                    const targetCarousel = this.list.shift();
                    this.list.push(targetCarousel);
                    const firstCarousel = this.$refs.carousel[0];
                    firstCarousel.style.transition = 'none';
                    firstCarousel.style.opacity = .45;
                    const nextCarousel = this.$refs.carousel[1];
                    nextCarousel.style.transition = 'none';
                    nextCarousel.style.opacity = 1;
                }, 1250);
            }
        }
    };

</script>

<style lang='stylus' scoped>
.carousel-wrapper {
    margin: 30px auto;
    width: 400px;
    height: 109px;
    overflow: hidden;

    .carousel-content {
        .carousel {
            margin: 10px;
            height: 34px;
            box-sizing: border-box;
            line-height: 34px;
            opacity: 1;
            background-color: #7587ff;
        }
    }


}
</style>
