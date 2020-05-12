<template>
    <div class="href-test-child">
        <div v-for="(item, index) in child" :key="index" class="item" ref="testChild">{{item}}</div>
    </div>
</template>

<script>

    export default {
        name: 'HrefTestChild',

        data() {
            return {
                child: ['a', 'b', 'c', 'd']
            }
        },

        mounted() {
            // console.log(this.$refs);
            // console.log('--', this.$refs.testChild[0]);
            //
            // setTimeout(() => {
            //     console.log('**');
            //     this.$refs.testChild[3].scrollIntoView();
            // }, 3000);
        }
    };

</script>

<style lang='stylus' scoped>
.href-test-child {
    background-color: #abcdef;

    .item {
        height: 500px;
        border-bottom: 1px solid red;
        background-color: rgba(150, 255, 127, 0.64);
    }
}
</style>
