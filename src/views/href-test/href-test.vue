<template>
    <div class="href-test">
        <p class="href-start">test-------</p>

        <href-test-child></href-test-child>

        <p class="test-end">test-----end</p>
    </div>
</template>

<script>

    import HrefTestChild from './components/href-test-child';

    export default {
        name: 'HrefTest',

        components: {
            HrefTestChild
        },

        mounted() {
            console.log(this.$refs);
            console.log('--', this.$refs.testChild[0]);
            //
            // setTimeout(() => {
            //     console.log('**');
            //     this.$refs.testChild[3].scrollIntoView();
            // }, 3000);
        }
    };

</script>

<style lang='stylus' scoped>
.href-test {
    .href-start {
        height: 500px;
    }
}
</style>
