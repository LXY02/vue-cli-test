<template>
    <div>
        <p v-if="oo.a">module-test</p>
        <test-1 @change="test1Change($event, testN)"></test-1>
        <test-2 v-if="show"></test-2>
    </div>
</template>

<script>

    import Test1 from './test-1';
    import Test2 from './test-2';

    export default {
        name: 'module-test',
        components: {
            Test1,
            Test2
        },

        data() {
            return {
                show: false,
                testN: 11,
                oo: {
                    a: true
                }
            }
        },

        mounted() {
            setTimeout(() => {
                this.show = true;
            }, 2000);
        },

        beforeUpdate() {
            console.log('before update');
        },

        methods: {
            test1Change(val, testN) {
                console.log('val, testN ', val, testN);
            }
        }
    };

</script>

