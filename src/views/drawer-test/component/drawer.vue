<template>
    <transition
        name="yqg-drawer-fade"
        @after-enter="afterEnter"
        @after-leave="afterLeave"
    >
        <div v-show="visible" class="yqg-drawer-wrapper" @click.self="handleWrapperClick">
            <div class="yqg-drawer-content" :class="[direction, visible && 'drawer-open']" :style="{width: size}">
                <header>X</header>

                <section>
                    <slot></slot>
                </section>
            </div>
        </div>
    </transition>
</template>

<script>

    export default {
        name: 'drawer',

        model: {
            prop: 'visible',
            event: 'closeDrawer'
        },

        props: {
            visible: {
                type: Boolean
            },

            direction: {
                type: String,
                default: 'ltr', // 从左往右
                validator(direction) {
                    return ['ltr', 'rtl'].includes(direction)
                }
            },

            size: { // 侧边栏尺寸
                type: String,
                default: '30%'
            },

            clickMaskClose: {
                type: Boolean,
                default: true
            }
        },

        methods: {
            handleWrapperClick() {
                if (this.clickMaskClose) {
                    this.closeDrawer();
                }
            },

            closeDrawer() {
                this.$emit('closeDrawer', false);
            },

            afterEnter() {
                this.$emit('opened');
            },

            afterLeave() {
                this.$emit('closed');
            }
        },
    };

</script>

<style lang='stylus' scoped>

    // @mixin drawer-animation($direction) {
    //     @if $direction === 'ltr' {
    //         animate
    //     }
    // }

    @keyframes yqg-drawer-fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

   @keyframes ltr-drawer-in {
       0% {
           transform: translate(-100%, 0px);
       }
       100% {
           transform: translate(0px, 0px);
       }
   }

    @keyframes ltr-drawer-out {
        0% {
            transform: translate(0px, 0px);
        }
        100% {
            transform: translate(-100%, 0px);
        }
    }

    .yqg-drawer-fade-enter-active {
        animation: yqg-drawer-fade-in 0.3s;
    }

    .yqg-drawer-fade-leave-active {
        animation: yqg-drawer-fade-in 0.3s reverse;
    }

    .yqg-drawer-wrapper {
        position: fixed;
        z-index: 900;
        overflow-y: auto;
        overflow-x: hidden;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        background-color: rgba(0, 0, 0, .5);

        .yqg-drawer-content {
            position: absolute;
            height: 100%;
            background-color: #FFFFFF;
        }

        // @include drawer-animation(rtl);
        // @include drawer-animation(ltr);

        .ltr {
            animation: ltr-drawer-out 0.3s 1ms;

            &.drawer-open {
                animation: ltr-drawer-in 0.3s 1ms;
            }
        }
    }

</style>
