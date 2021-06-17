<template>
    <div class="href-test">
        <p class="href-start" @click="onClick">click me</p>

        <div class="model"></div>

        <!--<href-test-child :show="show"></href-test-child>-->

        <!--<p class="test-end">test-&#45;&#45;&#45;&#45;end</p>-->
    </div>
</template>

<script>

    import Vue from 'vue';
    import HrefTestChild from './components/href-test-child';
    import OtherChild from './components/other-child';

    export default {
        name: 'HrefTest',

        components: {
            HrefTestChild
        },

        data() {
            return {
                show: false
            }
        },

        mounted() {
            this.show = true;
            // console.log('--', this.$refs.testChild);
            //
            // setTimeout(() => {
            //     console.log('**');
            //     this.$refs.testChild[3].scrollIntoView();
            // }, 3000);
        },

        methods: {
            onClick() {
                const Comp = Vue.extend(OtherChild);
                const modalInstance = new Comp(); // 这里的时候会执行beforeCreate、data、created

                modalInstance.visible = true;
                // modalInstance.$mount('.model');
                // console.log('modalInstance ', modalInstance);
            }
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
