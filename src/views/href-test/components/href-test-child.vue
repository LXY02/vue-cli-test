<template>
    <!--<transition name="b-dialog-slide">-->
        <!--<div v-if="show" class="href-test-child">-->
            <!--<div class="b-dialog">-->
                <!--<div v-for="(item, index) in child" :key="index" class="item" ref="testChild">{{item}}</div>-->
            <!--</div>-->
        <!--</div>-->
    <!--</transition>-->

    <!--<div v-if="show" class="href-test-child">-->
        <!--<div class="b-dialog">-->
            <!--<div v-for="(item, index) in child" :key="index" class="item" ref="testChild">{{item}}</div>-->
        <!--</div>-->
    <!--</div>-->

    <div>lalalalal</div>
</template>

<script>

    export default {
        name: 'HrefTestChild',

        props: {
            show: Boolean
        },

        data() {
            return {

                child: ['a', 'b', 'c', 'd']
            }
        },

        mounted() {
            // console.log(this.$refs);
            console.log('----2', this.$refs.testChild);

            this.$nextTick(() => {
                console.log('nextTick-2', this.$refs.testChild);
            });

            setTimeout(() => {
                console.log('timeout-2', this.$refs.testChild);
                // this.$refs.testChild[3].scrollIntoView();
            }, 0);
        },

        beforeUpdate() {
            console.log('beforeUpdate');
        }
    };

</script>

<style lang='stylus' scoped>
    .b-dialog-slide-enter-active,
    .b-dialog-slide-leave-active {
        transition: .36s cubic-bezier(.78, .14, .15, .86);

        .b-dialog {
            transition: transform .36s cubic-bezier(.78, .14, .15, .86);
        }
    }

    .b-dialog-slide-enter,
    .b-dialog-slide-leave-to {
        opacity: 0;

        .b-dialog {
            transform: translate(0, 5%);
        }
    }

        .b-dialog {
            height: 100px;
            background-color: #abcdef;
        }

.href-test-child {
    background-color: #abcdef;

    .item {
        /*height: 500px;*/
        border-bottom: 1px solid red;
        background-color: rgba(150, 255, 127, 0.64);
    }
}
</style>
