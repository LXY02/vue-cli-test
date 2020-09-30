<template>
    <div>
        <test-icon iconClass="icon"></test-icon>

        <div class="nav-wrapper">
            <div
                v-for="(nav, index) in list"
                class="nav"
                :key="index"
            >
                {{ nav }}
            </div>
        </div>
    </div>
</template>

<script>
    import TestIcon from '../components/test-icon';
    export default {
        name: 'NavSkew',

        components: {
            TestIcon
        },

        data() {
            return {
                list: new Array(3).fill(null).map((res, index) => {
                    return `test-${index}`;
                })
            };
        }
    };
</script>

<style lang='stylus' scoped>
    .nav-wrapper {
        display: flex;
        margin: 30px auto;
        width: 390px;
        background-color: #abcdef;
        align-items: center;

        .nav {
            flex: 1;
            padding: 0 15px;
            height: 40px;
            line-height: 40px;
            position: relative

            &:nth-child(1) {
                /*background-color: red;*/
            }

            &:not(:last-child) {
                position: relative;

                &:after {
                    position: absolute;
                    content: '';
                    top: 0;
                    right: -12px;
                    width: 0;
                    height: 0;
                    border-color:   red transparent transparent red;
                    border-width: 20px 12px;
                    border-style: solid;
                }
            }
        }
    }
</style>
